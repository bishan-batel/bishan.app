import {MouseEventHandler, useState, createRef, ReactNode, CSSProperties} from "react";
import BackgroundCanvas from "./BackgroundCanvas";
import "./Home.scss";

export default function Home() {
    const galleryRef = createRef<HTMLElement>();

    const panMouse: MouseEventHandler<HTMLElement> = (ev) => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        const decX = ev.clientX / window.innerWidth;
        const decY = ev.clientY / window.innerHeight;

        const x = -decX * (gallery.offsetWidth - window.innerWidth);
        const y = -decY * (gallery.offsetHeight - window.innerHeight);

        gallery.animate(
            {
                transform: `translate(${x}px, ${y}px)`,
            },
            {duration: 3000, fill: "forwards", easing: "ease"}
        );
    };

    return (
        <section id="gallery" onMouseMove={panMouse} ref={galleryRef} onMouseEnter={panMouse}>
            <BackgroundCanvas/>
            <Logo/>

            <Card x={60} y={30} color="#E63946">bruh</Card>
            <Card x={80} y={70} color="#F1FAEE"><h1 style={{color: "black"}}>sample text</h1></Card>
            <Card x={5} y={65} color="#A8DADC"><img alt=""
                                                    src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"/></Card>
            <Card x={10} y={20} color="#457B9D" padding=".5rem"><img width="128" alt=""
                                                                     src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/></Card>
            {/*<Card x={20} y={40} color="#1d3557">bruh</Card>*/}
        </section>
    );
}

function Logo() {
    return <div id="logo"><h1>Kishan Patel</h1></div>
}

function Card(props: { x: number, y: number, padding?: string, color: string, children: JSX.Element | JSX.Element[] | string }) {
    const style: CSSProperties = {left: `${props.x}%`, top: `${props.y}%`};
    (style as any)["--color"] = props.color;

    if (props.padding) (style as any)["--padding"] = props.padding;


    return (<article className="card" style={style}>
        <div className="inner">
            <div className="front"></div>
            <div className="back">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    </article>)
}