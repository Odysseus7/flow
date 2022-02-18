import React, { Component } from "react";
import ProjectListItem from "./ProjectListItem";

class EditProject extends Component {
	renderProjects(projects, isActive) {
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
				image={project.image}
				isActive={isActive}
			/>
		));
	}

	componentDidUpdate(prevProps) {
		if (this.props.projects !== prevProps.projects) {
			this.getActiveProjects();
		}
	}

	getActiveProjects() {
		const activeProjects = this.props.projects.filter(
			(project) => project.status === "active"
		);

		return this.renderProjects(activeProjects, true);
	}

	getinActiveProjects() {
		const inActiveProjects = this.props.projects.filter(
			(project) => project.status === "inactive"
		);
		return this.renderProjects(inActiveProjects, false);
	}

	render() {
		return (
			<section className="admin__courses__edit">
				<h1>Edit projects</h1>
				<article className="admin__courses__list">
					{this.getActiveProjects()}
					{this.getinActiveProjects()}
				</article>
			</section>
		);
	}
}

export default EditProject;
