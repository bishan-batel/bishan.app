precision highp float;

attribute vec4 aVertexPosition;
varying vec4 vVertexPosition;

void main() {
    gl_Position = aVertexPosition;
    vVertexPosition = gl_Position;
}