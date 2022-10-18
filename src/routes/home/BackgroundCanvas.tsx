import React, {useEffect} from "react";
import {initShaderProgram, loadTexture} from "../../utils/glutils";

export default function BackgroundCanvas() {
    const canvasRef = React.createRef<HTMLCanvasElement>();

    useEffect(() => {
        setupCanvas();
    }, []);

    async function setupCanvas() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl2");

        // TODO fallback for browsers without webGL
        if (!gl) {
            return;
        }

        // change width dynamically
        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientWidth;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resizeCanvas();
        canvas.onresize = resizeCanvas;

        const program = initShaderProgram(
            gl,
            await (await fetch("/shaders/background.vert")).text(),
            await (await fetch("/shaders/background.frag")).text()
        );

        const attribLocations = {
            vertPosition: gl.getAttribLocation(program, "aVertexPosition"),
        };

        const uniformLocations = {
            offset: gl.getUniformLocation(program, "uOffset"),
            time: gl.getUniformLocation(program, "uTime"),
            sampler: gl.getUniformLocation(program, "uSampler"),
        };

        // plane
        const rectBuff = gl.createBuffer();
        if (!rectBuff) throw Error("Unable to create buffer");
        gl.bindBuffer(gl.ARRAY_BUFFER, rectBuff);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]),
            gl.STATIC_DRAW
        );

        gl.bindBuffer(gl.ARRAY_BUFFER, rectBuff);
        gl.vertexAttribPointer(
            attribLocations.vertPosition,
            2,
            gl.FLOAT,
            false,
            0,
            0
        );
        gl.enableVertexAttribArray(attribLocations.vertPosition);

        const texture = loadTexture(gl, "images/abstract.jpeg");
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.useProgram(program);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(uniformLocations.sampler, 0);

        canvas.onmousemove = (ev) => {
            gl.uniform2f(
                uniformLocations.offset,
                ev.clientX / window.innerWidth,
                ev.clientY / window.innerHeight
            );

        };

        const startTime = Date.now();

        const draw = () => {
            // clear screen
            gl.clearColor(0, 0, 0, 0.5);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            gl.uniform1f(uniformLocations.time, (Date.now() - startTime) / 1000);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            requestAnimationFrame(draw);
        };
        draw();
    }

    return <canvas id="glcanvas" ref={canvasRef}/>;
}
