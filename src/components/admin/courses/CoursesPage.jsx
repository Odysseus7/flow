import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCourses } from "../../../actions/coursesActions";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

class CoursesPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			courses: this.props.courses,
		};
	}

	componentDidMount() {
		this.props.fetchAllCourses();
	}

	componentDidUpdate(prevProps) {
		if (this.props.courses !== prevProps.courses) {
			this.setState({ courses: this.props.courses });
		}
	}

	updateCourseList = (course) => {
		console.log(course);
		this.setState({ courses: [...this.state.courses, course] }, () =>
			console.log(this.state)
		);
	};

	render() {
		return (
			<main>
				<section className="admin__courses__container">
					<EditCourse courses={this.state.courses} />
					<AddCourse updateCourseList={this.updateCourseList} />
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		courses: state.courses,
	};
};

export default connect(mapStateToProps, { fetchAllCourses })(CoursesPage);
