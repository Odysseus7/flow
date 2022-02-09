import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { admin } from "../apis/base";
import { errorNotification } from "../notifications/toasters";

class Login extends Component {
	options = {
		headers: { "Content-Type": "x-www-form-urlencoded" },
	};

	login = async (data) => {
		await admin
			.post("/login", data)
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("isAuthenticated", true);
				this.props.history.push("/admin/dashboard");
			})
			.catch((error) => {
				if (error["response"] && error["response"].status === 400) {
					errorNotification("Invalid credentials");
					return;
				}
				errorNotification("An unexpected error occured");
			});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const data = {
			username: event.target.username.value,
			password: event.target.password.value,
		};

		this.login(data);
	};

	render() {
		return (
			<section className="main main__login">
				<main className="login__form__container">
					<FontAwesomeIcon icon={faUserShield} size="2x"></FontAwesomeIcon>
					<h1 className="primary-heading">Admin Login</h1>
					<form onSubmit={this.handleSubmit} className="login__form">
						<input
							label="Username"
							name="username"
							placeholder="Username"
							type="text"
							className="login__input"
							required
						/>
						<input
							label="Password"
							name="password"
							placeholder="Password"
							type="password"
							className="login__input"
							required
						/>
						<button type="submit" className="login__btn">
							login
						</button>
					</form>
				</main>
			</section>
		);
	}
}

export default Login;
