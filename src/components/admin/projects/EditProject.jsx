import React, { Component } from "react";
import ProjectListItem from "./ProjectListItem";

class EditProject extends Component {
	renderCourses(projects, isActive) {
		return projects.map((project) => (
			<ProjectListItem
				key={project._id}
				id={project._id}
				name={project.name}
				description={project.description}
				author={project.author}
				URL={project.URL}
				githubURL={project.githubURL}
				status={project.status}
				image={project.images}
				isActive={isActive}
			/>
		));
	}

	componentDidUpdate(prevProps) {
		if (this.props.projects !== prevProps.projects) {
			this.getActiveCourses();
		}
	}

	getActiveCourses() {
		const activeCourses = this.props.projects.filter(
			(project) => project.status === "active"
		);

		return this.renderCourses(activeCourses, true);
	}

	getInActiveCourses() {
		const inActiveCourses = this.props.projects.filter(
			(project) => project.status === "inactive"
		);
		return this.renderCourses(inActiveCourses, false);
	}

	render() {
		return (
			<section className="admin__courses__edit">
				<h1>Edit projects</h1>
				<article className="admin__courses__list">
					{this.getActiveCourses()}
					{this.getInActiveCourses()}
				</article>
			</section>
		);
	}
}

export default EditProject;
