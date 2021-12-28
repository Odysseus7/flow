import React from "react";
import Cards from "./AdminCards";

const Welcome = () => {
	const username = localStorage.getItem("username");

	return (
		<section className="main">
			<section className="intro">
				<article className="intro__subtext">Hi {username}</article>
				<h1 className="intro__heading">What do you want to do?</h1>
			</section>
			<main className="cards__container admin__cards__container">
				<Cards />
			</main>
		</section>
	);
};

export default Welcome;
