import React, { Component } from "react";
import ModalBtn from "../../../modal/ModalBtn";
import { admin } from "../../../apis/base";
import {
	errorNotification,
	successNotification,
} from "../../../notifications/toasters";

class ProjectListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.id,
			name: props.name,
			description: props.description,
			URL: props.URL,
			githubURL: props.githubURL,
			status: props.status,
			images: props.images,
			updatedTitle: props.name,
			updatedStatus: props.isActive,
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onFormSave = (event) => {
		event.preventDefault();
		this.editProject(this.state);
	};

	editProject = async (project) => {
		await admin
			.patch(`/projects/${this.props.id}`, project)
			.then((response) => {
				successNotification("Changes are successfully saved");

				this.setState({ updatedTitle: project.name });
			})
			.catch((error) => {
				if (error["response"] && error["response"].status === 400) {
					errorNotification("Project not found");
					return;
				}
				errorNotification("An unexpected error occured");
			});
	};

	changeStatus = async (status) => {
		const updatedStatus = status === "active" ? true : false;

		await admin
			.patch(`/projects/${this.props.id}?status=${status}`, null)
			.then((response) => {
				if (status === "active") {
					successNotification("Project has been restored");
				} else {
					successNotification("Project has been deleted");
				}
				this.setState({ updatedStatus });
			})
			.catch((error) => {
				if (error["response"] && error["response"].status === 400) {
					errorNotification("Project not found");
					return;
				}
				errorNotification("An unexpected error occured");
			});
	};

	onDeleteClick = () => {
		this.setState({ status: "inactive" }, () => {
			this.changeStatus("inactive");
		});
	};

	onActiveClick = () => {
		this.setState({ status: "active" }, () => {
			this.changeStatus("active");
		});
	};

	renderForm = () => {
		return (
			<form
				onSubmit={this.onFormSave}
				className="admin__form admin__courselistitem__form"
			>
				<input
					label="name"
					name="name"
					placeholder={this.state.name}
					type="text"
					className="admin__input admin__title"
					value={this.state.name}
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
					label="url"
					name="URL"
					placeholder="URL"
					type="text"
					className="admin__input"
					value={this.state.URL}
					onChange={this.handleChange}
					required
				/>

				<input
					label="githuburl"
					name="githubURL"
					placeholder="Github URL"
					type="text"
					className="admin__input"
					value={this.state.githubURL}
					onChange={this.handleChange}
					required
				/>
				<button type="submit" className="btn draw">
					Save changes
				</button>
			</form>
		);
	};

	renderButtons = () => {
		if (this.state.updatedStatus) {
			return (
				<article className="admin__courses__button__container">
					<ModalBtn buttonLabel="Edit">{this.renderForm()}</ModalBtn>
					<div className="wrapper-0-2-1">
						<button
							type="button"
							className="modalButton-0-2-2 admin__btn"
							onClick={this.onDeleteClick}
						>
							Delete
						</button>
					</div>
				</article>
			);
		} else {
			return (
				<article className="admin__courses__button__container">
					<button
						type="button"
						className="admin__undo__btn admin__btn"
						onClick={this.onActiveClick}
					>
						Undo delete
					</button>
				</article>
			);
		}
	};

	render() {
		return (
			<article
				className={`admin__courselist__item ${
					!this.state.updatedStatus ? "inactive" : ""
				}`}
			>
				<h2 className="admin__heading-secondary">{this.state.updatedTitle}</h2>
				{this.renderButtons()}
			</article>
		);
	}
}

export default ProjectListItem;
