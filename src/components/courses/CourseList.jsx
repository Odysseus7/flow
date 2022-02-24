import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../actions/coursesActions";
import CourseCard from "./CourseCard";

class CourseList extends Component {
	componentDidMount() {
		this.props.fetchCourses();
	}

	renderCourses() {
		return this.props.courses.map((course) => (
			<CourseCard
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
			<section className="main main__courses">
				<main className="courses__container">{this.renderCourses()}</main>
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

export default connect(mapStateToProps, { fetchCourses })(CourseList);
