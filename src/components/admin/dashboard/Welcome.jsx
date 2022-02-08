import React, { Component } from "react";
import Cards from "./AdminCards";
import jwt_decode from "jwt-decode";

class Welcome extends Component {
	getUsername = () => {
		const token = localStorage.getItem("token");
		if (token) {
			const user = jwt_decode(token);
			const username = user["username"];
			return username;
		}
	};

	render() {
		return (
			<section className="main">
				<section className="intro">
					<article className="intro__subtext">Hi {this.getUsername()}!</article>
					<h1 className="intro__heading">What do you want to do?</h1>
				</section>
				<main className="cards__container admin__cards__container">
					<Cards />
				</main>
			</section>
		);
	}
}

export default Welcome;
