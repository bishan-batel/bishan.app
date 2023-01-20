import {
	MouseEventHandler,
	useState,
	createRef,
	ReactNode,
	CSSProperties,
} from "react";
import "./Home.scss";
import Todo from "../../components/todoMesseage/Todo";

export default function Home() {
	return (
		<main id="homepage">
			<section className="me">
				<h1>Kishan Patel</h1>
			</section>
		</main>
	);
}
