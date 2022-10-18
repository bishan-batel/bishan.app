import {MouseEventHandler, useState, createRef} from "react";
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
            {duration: 1000, fill: "forwards", easing: "ease"}
        );
    };

    return (
        <section id="gallery" onMouseMove={panMouse} ref={galleryRef}>
            <BackgroundCanvas/>
            <Logo/>
        </section>
    );
}

function Logo() {
    return <div id="logo"><h1>Kishan Patel</h1></div>
}
