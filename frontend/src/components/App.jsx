import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import ProjectList from "./projects/ProjectList";
import CourseList from "./courses/CourseList";
import { darkModeOn } from "../actions";
import { darkModeOff } from "../actions";
import ThemeButton from "./theme/ThemeButton";
import "../scss/style.scss";
import Home from "./home/Home";
import BookList from "./books/BookList";
import About from "./about/About";
import Setup from "./setup/Setup";
import Contact from "./contact/Contact";

class App extends Component {
	setDarkMode() {
		this.darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
		var body = document.querySelector("body");
		body.setAttribute("data-theme", `${this.darkMode ? "dark" : "light"}`);
	}

	render() {
		this.setDarkMode();
		const logo = (
			<a href="/">
				<img src="../images/logo.svg" className="logo" alt="Logo" />
			</a>
		);

		return (
			<div className="app">
				<header className="app__header">
					{window.location.pathname === "/" ? "" : logo}
					<ThemeButton
						onClick={
							this.darkMode ? this.props.darkModeOff : this.props.darkModeOn
						}
						darkMode={this.props.darkMode}
					/>
				</header>

				<BrowserRouter>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/projects" exact component={ProjectList} />
					<Route path="/courses" exact component={CourseList} />
					<Route path="/books" exact component={BookList} />
					<Route path="/setup" exact component={Setup} />
					<Route path="/contact" exact component={Contact} />
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		darkMode: state.darkMode,
	};
};

export default connect(mapStateToProps, { darkModeOn, darkModeOff })(App);
