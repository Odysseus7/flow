import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { admin } from "../../apis/base";
import { errorNotification } from "../../notifications/toasters";

class Login extends Component {
	options = {
		headers: { "Content-Type": "x-www-form-urlencoded" },
	};

	setUserData(token) {
		localStorage.setItem("token", token);
		localStorage.setItem("isAuthenticated", true);
	}

	generateError(error) {
		if (error["response"] && error["response"].status === 400) {
			errorNotification("Invalid credentials");
			return;
		}
		errorNotification("An unexpected error occured");
	}

	login = async (data) => {
		await admin
			.post("/login", data)
			.then((response) => {
				this.setUserData(response.data.token);
				this.props.history.push("/admin/dashboard");
			})
			.catch((error) => {
				this.generateError(error);
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

	generateForm = () => {
		return (
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
					Login
				</button>
			</form>
		);
	};

	render() {
		return (
			<section className="main main__login">
				<main className="login__form__container">
					<FontAwesomeIcon icon={faUserShield} size="2x"></FontAwesomeIcon>
					<h1 className="primary-heading">Admin Login</h1>
					{this.generateForm()}
				</main>
			</section>
		);
	}
}

export default Login;
