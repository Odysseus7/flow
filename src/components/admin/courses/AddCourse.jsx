import React, { Component } from "react";
import { admin } from "../../../apis/base";
import {
	errorNotification,
	successNotification,
} from "./../../../notifications/toasters";

// TO DO
/**
 * Update state upon saved course
 * Add form validation
 */

class AddCourse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			author: "",
			URL: "",
		};
	}

	saveCourse = async (course) => {
		await admin
			.post(`/courses`, course)
			.then((response) => {
				successNotification("Course has successfully been added");

				// this.setState({ updatedTitle: course.title });
			})
			.catch((error) => {
				errorNotification("An unexpected error occured");
			});
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
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
					required
				/>

				<textarea
					id="description"
					label="Description"
					name="description"
					placeholder="Description"
					className="admin__add__description"
					rows="7"
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
					onChange={this.handleChange}
					required
				/>
				<button type="submit" className="btn draw">
					Save changes
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
