import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { admin } from "../apis/base";

class Login extends Component {
	options = {
		headers: { "Content-Type": "x-www-form-urlencoded" },
	};

	componentDidMount() {
		if (JSON.parse(localStorage.getItem("isAuthenticated"))) {
			this.props.history.push("/admin/dashboard");
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const data = {
			username: event.target.username.value,
			password: event.target.password.value,
		};

		const response = await admin.post("/login", data);
		if (response.status === 200) {
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("id", response.data.id);
			localStorage.setItem("username", response.data.username);
			localStorage.setItem("isAuthenticated", true);
			this.props.history.push("/admin/dashboard");
		}
		console.log(response);
	};
	render() {
		console.log(this.props);
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
