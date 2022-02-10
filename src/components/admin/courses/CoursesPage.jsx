import React from "react";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

const CoursesPage = () => {
	return (
		<main>
			<section className="admin__courses__container">
				<EditCourse />
				<AddCourse />
			</section>
		</main>
	);
};

export default CoursesPage;
