import React from "react";
import AddCourse from "./AddCourse";
import DeleteCourse from "./DeleteCourse";

const CoursesPage = () => {
	return (
		<main className="admin__courses__container">
			<DeleteCourse />
			<AddCourse />
		</main>
	);
};

export default CoursesPage;
