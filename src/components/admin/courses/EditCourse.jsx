import React, { Component } from "react";
import { fetchCourses } from "../../../actions/coursesActions";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";

class EditCourse extends Component {
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
				status={course.status}
			/>
		));
	}

	render() {
		return (
			<section className="admin__courses__edit">
				<h1>Edit courses</h1>
				<article className="admin__courses__list">
					{this.renderCourses()}
				</article>
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

export default connect(mapStateToProps, { fetchCourses })(EditCourse);
