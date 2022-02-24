import React, { Component } from "react";
import { admin } from "../../../apis/base";
import {
	errorNotification,
	successNotification,
} from "./../../../notifications/toasters";

class AddCourse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			author: "",
			URL: "",
			validURL: "",
		};
	}

	urlPatternValidation = (URL) => {
		const regex = new RegExp(
			"(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
		);
		return regex.test(URL);
	};

	saveCourse = async (course) => {
		await admin
			.post(`/courses`, course)
			.then((response) => {
				this.props.updateCourseList(response.data);
				successNotification("Course has successfully been added");
			})
			.catch((error) => {
				errorNotification("An unexpected error occured");
			});
	};

	handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		if (name === "URL") {
			const validURL = !value || this.urlPatternValidation(value);
			this.setState({
				validURL,
			});
		}
		this.setState({ [name]: value });
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		this.saveCourse(this.state);
	};

	renderForm = () => {
		return (
			<form onSubmit={this.handleOnSubmit} className="admin__course__form">
				<input
					label="title"
					name="title"
					placeholder="Title"
					type="text"
					className="admin__add__input admin__title"
					value={this.state.title}
					onChange={this.handleChange}
					minLength="10"
					required
				/>

				<textarea
					id="description"
					label="Description"
					name="description"
					placeholder="Description"
					className="admin__add__description"
					rows="7"
					minLength="20"
					value={this.state.description}
					onChange={this.handleChange}
					required
				/>

				<input
					label="author"
					name="author"
					placeholder="Author"
					type="text"
					className="admin__add__input"
					minLength="10"
					value={this.state.author}
					onChange={this.handleChange}
					required
				/>

				<input
					label="url"
					name="URL"
					placeholder="URL"
					type="text"
					className="admin__add__input"
					value={this.state.URL}
					minLength="3"
					onChange={this.handleChange}
					required
				/>
				{!this.state.validURL && this.state.validURL !== "" && (
					<p className="urlValidationText">URL is invalid.</p>
				)}
				<button type="submit" className="btn draw">
					Add course
				</button>
			</form>
		);
	};

	render() {
		return (
			<section className="admin__courses__add">
				<h1 className="admin__courses__heading--primary">Add course</h1>
				{this.renderForm()}
			</section>
		);
	}
}

export default AddCourse;
