import React from "react";
import { Route, useLocation } from "react-router-dom";
import ProjectList from "./projects/ProjectList";
import CourseList from "./courses/CourseList";
import "../scss/style.scss";
import Home from "./home/Home";
import BookList from "./books/BookList";
import About from "./about/About";
import Setup from "./setup/Setup";
import Contact from "./contact/Contact";
import Login from "../admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import Header from "./shared/Header";
import Welcome from "./admin/dashboard/Welcome";
import CoursesPage from "./admin/courses/CoursesPage";
import { ToastContainer, Slide } from "react-toastify";
import BackBtn from "./BackBtn";
import ProjectsPage from "./admin/projects/ProjectsPage";

const App = () => {
	const location = useLocation();
	return (
		<div className="app">
			<Header location={location.pathname} />
			<BackBtn />
			<Route path="/" exact component={Home} />
			<Route path="/about" exact component={About} />
			<Route path="/projects" exact component={ProjectList} />
			<Route path="/courses" exact component={CourseList} />
			<Route path="/books" exact component={BookList} />
			<Route path="/setup" exact component={Setup} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/admin/login" exact component={Login} />

			<ProtectedRoute exact path="/admin/dashboard" component={Welcome} />
			<ProtectedRoute exact path="/admin/projects" component={ProjectsPage} />
			<ProtectedRoute exact path="/admin/courses" component={CoursesPage} />
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={true}
				transition={Slide}
			/>
		</div>
	);
};

export default App;
