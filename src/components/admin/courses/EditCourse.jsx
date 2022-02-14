import React, { Component } from "react";
import CourseListItem from "./CourseListItem";

class EditCourse extends Component {
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

	componentDidUpdate(prevProps) {
		if (this.props.courses !== prevProps.courses) {
			this.getActiveCourses();
		}
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

export default EditCourse;
