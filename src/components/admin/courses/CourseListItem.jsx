import React, { Component } from "react";
import ModalBtn from "../../../modal/ModalBtn";
import { admin } from "../../../apis/base";
import {
	errorNotification,
	successNotification,
} from "./../../../notifications/toasters";

class CourseListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.id,
			title: props.title,
			description: props.description,
			author: props.author,
			URL: props.URL,
			status: props.status,
			updatedTitle: props.title,
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onFormSave = (event) => {
		event.preventDefault();
		this.editCourse(this.state);
	};

	editCourse = async (course) => {
		await admin
			.patch(`/courses/${this.props.id}`, course)
			.then((response) => {
				if (course.status === "inactive") {
					successNotification("Course is successfully deleted");
				} else {
					successNotification("Changes are successfully saved");
				}

				this.setState({ updatedTitle: this.state.title });
			})
			.catch((error) => {
				if (error["response"] && error["response"].status === 400) {
					errorNotification("Course not found");
					return;
				}
				errorNotification("An unexpected error occured");
			});
	};

	onDeleteClick = () => {
		this.setState({ status: "inactive" }, () => this.editCourse(this.state));
	};

	renderForm = () => {
		return (
			<form
				onSubmit={this.onFormSave}
				className="admin__form admin__courselistitem__form"
			>
				<input
					label="title"
					name="title"
					placeholder={this.state.title}
					type="text"
					className="admin__input admin__title"
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
					name="URL"
					placeholder="URL"
					type="text"
					className="admin__input"
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
			<article className="admin__courselist__item">
				<h2 className="admin__heading-secondary">{this.state.updatedTitle}</h2>
				<article className="admin__courses__button__container">
					<ModalBtn buttonLabel="Edit">{this.renderForm()}</ModalBtn>
					<div class="wrapper-0-2-1">
						<button
							type="button"
							class="modalButton-0-2-2 admin__btn"
							onClick={this.onDeleteClick}
						>
							Delete
						</button>
					</div>
				</article>
			</article>
		);
	}
}

export default CourseListItem;
