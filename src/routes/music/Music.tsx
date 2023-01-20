import Todo from "../../components/todoMesseage/Todo";
import "./Music.scss"
import React, {createRef, CSSProperties, MouseEventHandler, useEffect, useState} from "react";
import Twemoji from "react-twemoji";

// audio player with custom controls
function AudioPlayer(props: { src: string }) {
	const audioRef = createRef<HTMLAudioElement>();
	const [playing, setPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const playPause: MouseEventHandler<HTMLButtonElement> = () => {
		if (audioRef.current?.paused) audioRef.current.play().then(() => setPlaying(true));
		else {
			audioRef.current?.pause();
			setPlaying(false);
		}
	}

	const reset: MouseEventHandler<HTMLButtonElement> = () => {
		if (!audioRef.current) return;

		audioRef.current.pause();
		audioRef.current.currentTime = 0;
		audioRef.current.play().then(r => setPlaying(true));
	}

	return (
		<div className="audio-player">
			<audio ref={audioRef} src={props.src}/>
			<button onClick={playPause} className={"playPause" + (playing ? " playing" : "")}>
				<Twemoji>
					{playing ? "⏸️" : "▶️"}
				</Twemoji>
			</button>

			<button onClick={reset} className="reset">
				<Twemoji>
					🔄
				</Twemoji>
			</button>

			<a href="https://soundcloud.com/kishan-patel-1/sets/lofi" target="_blank" rel="noreferrer">
				<Twemoji>⬇️</Twemoji>
			</a>
		</div>
	);
}

interface CompositionProps {
	title: string;
	date: string;
	soundFile: string;
	children?: string;
}

function Composition(props: CompositionProps) {
	return (
		<div className="composition">
			<h2>{props.title}
				<p className="date">{props.date}</p>
			</h2>
			<span className="inner">
				<p className="description">{props.children}</p>
				{props.soundFile && <AudioPlayer src={props.soundFile}/>}
			</span>
		</div>
	);
}

export default function Music() {
	return (
		<main id="music" className="page">
			<section className="about">
				<h1>Compositions</h1>
				<p>
					Not my main niche I try to fulfill, but music (& playing the cello),
					have always been a big hobby of mine, here are the pieces of music I
					have wrote (that I still have access too).
					Unfortunately, I've lost many of the compositions I've done in early high school,
					and I've only recently started to get back into composing, so this will be a growing list over time.
				</p>
			</section>

			<section className="works">
				<Composition title="Geo" date="May, 2020" soundFile="music/Geoff_its_like_Geo_and_Jeff.mp3">
					A piece I wrote for an assignment in my orchestra class in the 9th grade. The assignment was to
					compose a multi-instrument piece with a clear ostinato (repeated pattern) in it. Not the best, but
					it was the first piece I ever wrote.
				</Composition>

				<Composition title="Garden II" date="November, 2022" soundFile="music/Garden_Edit_1_Export_3.mp3">
					aA piece of work
				</Composition>
			</section>
		</main>
	);
}
