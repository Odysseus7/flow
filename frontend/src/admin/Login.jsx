import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
	render() {
		return (
			<section className="main main__login">
				<main className="login__form__container">
					<FontAwesomeIcon icon={faUserShield} size="2x"></FontAwesomeIcon>
					<h1 className="primary-heading">Admin Login</h1>
					<form className="login__form">
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
