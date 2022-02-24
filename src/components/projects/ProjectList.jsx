import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions/projectsActions";
import ProjectCard from "./ProjectCard";

class ProjectList extends Component {
	componentDidMount() {
		this.props.fetchProjects();
	}

	renderProjects() {
		return this.props.projects.map((project) => (
			<ProjectCard
				key={project._id}
				id={project._id}
				title={project.name}
				description={project.description}
				imgURL={project.image}
				URL={project.URL}
				githubURL={project.githubURL}
			/>
		));
	}

	render() {
		return (
			<section className="main__projects">
				<main className="projects__container">{this.renderProjects()}</main>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		projects: state.projects,
	};
};

export default connect(mapStateToProps, { fetchProjects })(ProjectList);
