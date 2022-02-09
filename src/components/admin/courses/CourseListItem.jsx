import React, { Component } from "react";
import ModalBtn from "../../../modal/ModalBtn";

class CourseListItem extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			id: props.id,
			title: props.title,
			description: props.description,
			author: props.author,
			URL: props.URL,
		};

		// this.handleChange = this.handleChange.bind(this);
		// this.onFormSave = this.onFormSave.bind(this);
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onFormSave = (event) => {
		console.log("changes saved.");
		event.preventDefault();
	};

	render() {
		// const { id, title, description, author, URL } = this.props;
		return (
			<article class="admin__courselist__item">
				<h2>{this.props.title}</h2>
				<ModalBtn buttonLabel="Edit">
					<form onSubmit={this.onFormSave}>
						<input
							label="title"
							name="title"
							placeholder={this.state.title}
							type="text"
							className="admin__input"
							value={this.state.title}
							onChange={this.handleChange}
							required
						/>

						<textarea
							id="description"
							label="Description"
							name="description"
							placeholder="Description"
							className="admin__textarea"
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
							className="admin__input"
							value={this.state.author}
							onChange={this.handleChange}
							required
						/>

						<input
							label="url"
							name="url"
							placeholder="URL"
							type="text"
							className="admin__input"
							value={this.state.URL}
							onChange={this.handleChange}
							required
						/>
						<button type="submit">Save changes</button>
					</form>
				</ModalBtn>
			</article>
		);
	}
}

export default CourseListItem;
