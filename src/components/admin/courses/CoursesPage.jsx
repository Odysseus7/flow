import React from "react";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

const CoursesPage = () => {
	return (
		<main className="admin__courses__container">
			<EditCourse />
			<AddCourse />
		</main>
	);
};

export default CoursesPage;
