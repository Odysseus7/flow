import React, { Component } from "react";

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

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleOnSubmit = () => {};

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
				<h1 class="admin__courses__heading--primary">Add course</h1>
				{this.renderForm()}
			</section>
		);
	}
}

export default AddCourse;
