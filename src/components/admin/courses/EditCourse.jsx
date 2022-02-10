import React, { Component } from "react";
import { fetchAllCourses } from "../../../actions/coursesActions";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";

class EditCourse extends Component {
	componentDidMount() {
		this.props.fetchAllCourses();
	}

	renderCourses(courses, isActive) {
		return courses.map((course) => (
			<CourseListItem
				key={course._id}
				id={course._id}
				title={course.title}
				description={course.description}
				author={course.author}
				URL={course.URL}
				status={course.status}
				isActive={isActive}
			/>
		));
	}

	getActiveCourses() {
		const activeCourses = this.props.courses.filter(
			(course) => course.status === "active"
		);

		return this.renderCourses(activeCourses, true);
	}

	getInActiveCourses() {
		const inActiveCourses = this.props.courses.filter(
			(course) => course.status === "inactive"
		);
		return this.renderCourses(inActiveCourses, false);
	}

	render() {
		return (
			<section className="admin__courses__edit">
				<h1>Edit courses</h1>
				<article className="admin__courses__list">
					{this.getActiveCourses()}
					{this.getInActiveCourses()}
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

export default connect(mapStateToProps, { fetchAllCourses })(EditCourse);
