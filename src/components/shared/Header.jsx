import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { darkModeOn } from "../../actions";
import { darkModeOff } from "../../actions";
import ThemeButton from "../theme/ThemeButton";
import LogoutBtn from "../admin/LogoutBtn";

class Header extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
	};

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
		const { match, location, history } = this.props;

		const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
		const pathname = this.props.location.pathname;
		const adminRoute = pathname.includes("admin");

		return (
			<header className="app__header">
				{pathname === "/" ? "" : logo}
				{isAuthenticated && adminRoute ? <LogoutBtn /> : ""}
				<ThemeButton
					onClick={
						this.darkMode ? this.props.darkModeOff : this.props.darkModeOn
					}
					darkMode={this.props.darkMode}
				/>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		darkMode: state.darkMode,
	};
};

const HeaderWithRouter = withRouter(Header);

export default connect(mapStateToProps, { darkModeOn, darkModeOff })(
	HeaderWithRouter
);
