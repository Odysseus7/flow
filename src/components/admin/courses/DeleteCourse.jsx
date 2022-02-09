import React, { Component } from "react";
import { fetchCourses } from "../../../actions/coursesActions";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";

class DeleteCourse extends Component {
	componentDidMount() {
		this.props.fetchCourses();
	}

	renderCourses() {
		return this.props.courses.map((course) => (
			<CourseListItem
				key={course._id}
				id={course._id}
				title={course.title}
				description={course.description}
				author={course.author}
				URL={course.URL}
			/>
		));
	}

	render() {
		return (
			<section className="admin__courses__delete">
				{this.renderCourses()}
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		courses: state.courses,
	};
};

export default connect(mapStateToProps, { fetchCourses })(DeleteCourse);
