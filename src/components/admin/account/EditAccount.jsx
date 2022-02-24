import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import ModalBtn from "../../../modal/ModalBtn";
import { admin } from "../../../apis/base";
import {
	errorNotification,
	successNotification,
} from "../../../notifications/toasters";

class EditAccount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: this.getUsername(),
			oldPassword: "",
			newPassword: "",
		};
	}

	getUsername = () => {
		const token = localStorage.getItem("token");
		if (token) {
			const user = jwt_decode(token);
			const username = user["username"];
			return username;
		}
	};

	getId = () => {
		const token = localStorage.getItem("token");
		if (token) {
			const user = jwt_decode(token);
			const id = user["user_id"];
			return id;
		}
	};

	resetForm = () => {
		this.setState({ oldPassword: "", newPassword: "" });
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onFormSave = (event) => {
		event.preventDefault();
		this.changePassword(this.state);
	};

	changePassword = async (passwords) => {
		await admin
			.post(`/users/${this.getId()}`, passwords)
			.then(() => {
				successNotification("Changes are successfully saved");
				this.resetForm();
			})
			.catch(() => {
				errorNotification("An unexpected error occured");
			});
	};

	renderForm = () => {
		return (
			<form
				onSubmit={this.onFormSave}
				className="admin__form admin__courselistitem__form"
			>
				<input
					label="oldPassword"
					name="oldPassword"
					placeholder="Old password"
					type="password"
					className="admin__input admin__title"
					value={this.state.oldPassword}
					onChange={this.handleChange}
					required
				/>

				<input
					label="password"
					name="newPassword"
					placeholder="New password"
					type="password"
					className="admin__input admin__title"
					value={this.state.newPassword}
					onChange={this.handleChange}
					required
				/>

				<button type="submit" className="btn draw">
					Save changes
				</button>
			</form>
		);
	};

	renderModalBtn = () => {
		return (
			<ModalBtn buttonLabel="Change password">{this.renderForm()}</ModalBtn>
		);
	};
	render() {
		return (
			<main class="admin__account">
				<section className="admin__greeting">
					<p>Hi {this.getUsername()}!</p>
					{this.renderModalBtn()}
				</section>
			</main>
		);
	}
}

export default EditAccount;
