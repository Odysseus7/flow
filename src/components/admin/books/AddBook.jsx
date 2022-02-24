import React, { Component } from "react";
import { admin } from "../../../apis/base";
import {
	errorNotification,
	successNotification,
} from "../../../notifications/toasters";

class AddBook extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			author: "",
			URL: "",
			image: "",
			validURL: "",
		};
	}

	urlPatternValidation = (URL) => {
		const regex = new RegExp(
			"(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
		);
		return regex.test(URL);
	};

	saveBook = async (book) => {
		await admin
			.post(`/books`, book)
			.then((response) => {
				this.props.updateBookList(response.data);
				successNotification("Book has successfully been added");
			})
			.catch(() => {
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
		this.saveBook(this.state);
	};

	renderForm = () => {
		return (
			<form onSubmit={this.handleOnSubmit} className="admin__course__form">
				<input
					label="name"
					name="name"
					placeholder="Name"
					type="text"
					className="admin__add__input admin__title"
					value={this.state.name}
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
					label="image"
					name="image"
					placeholder="Image URL"
					type="text"
					className="admin__add__input"
					value={this.state.image}
					minLength="3"
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
					Add book
				</button>
			</form>
		);
	};

	render() {
		return (
			<section className="admin__courses__add">
				<h1 className="admin__courses__heading--primary">Add book</h1>
				{this.renderForm()}
			</section>
		);
	}
}

export default AddBook;
