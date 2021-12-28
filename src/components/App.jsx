import React, { Component } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";

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
import Welcome from "./admin/Welcome";

const App = () => {
	const location = useLocation();
	return (
		<div className="app">
			<Header location={location.pathname} />

			<Route path="/" exact component={Home} />
			<Route path="/about" exact component={About} />
			<Route path="/projects" exact component={ProjectList} />
			<Route path="/courses" exact component={CourseList} />
			<Route path="/books" exact component={BookList} />
			<Route path="/setup" exact component={Setup} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/admin/login" exact component={Login} />
			<ProtectedRoute exact path="/admin/dashboard" component={Welcome} />
		</div>
	);
};

export default App;
