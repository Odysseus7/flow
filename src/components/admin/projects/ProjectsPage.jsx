import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllProjects } from "../../../actions/projectsActions";
import AddCourse from "./AddProject";
import EditProject from "./EditProject";

class ProjectsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: this.props.projects,
		};
	}

	componentDidMount() {
		this.props.fetchAllProjects();
	}

	componentDidUpdate(prevProps) {
		if (this.props.projects !== prevProps.projects) {
			this.setState({ projects: this.props.projects });
		}
	}

	updateCourseList = (project) => {
		this.setState({ projects: [...this.state.projects, project] });
	};

	render() {
		return (
			<main>
				<section className="admin__courses__container">
					<EditProject projects={this.state.projects} />
					<AddCourse updateCourseList={this.updateCourseList} />
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		projects: state.projects,
	};
};

export default connect(mapStateToProps, { fetchAllProjects })(ProjectsPage);
