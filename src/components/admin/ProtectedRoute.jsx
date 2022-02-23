import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const checkToken = (token, history) => {
	try {
		const decodedToken = jwt_decode(token);
		localStorage.setItem("isAuthenticated", true);
		if (decodedToken.exp * 1000 < Date.now()) {
			localStorage.removeItem("token");
			localStorage.removeItem("isAuthenticated", false);
			history.push("/admin/login");
		}
	} catch {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuthenticated");
		history.push("/admin/login");
	}
};

export const isAuthenticated = (token) => {
	try {
		jwt_decode(token);
		return true;
	} catch {
		return false;
	}
};

function ProtectedRoute({ component: Component, ...restOfProps }) {
	const token = localStorage.getItem("token");
	const isAuthenticated = localStorage.getItem("isAuthenticated");
	const history = useHistory();

	if (token) {
		checkToken(token, history);
	}

	return (
		<Route
			{...restOfProps}
			render={(props) =>
				isAuthenticated && token ? (
					<Component {...props} />
				) : (
					<Redirect to="/admin/login" />
				)
			}
		/>
	);
}

export default ProtectedRoute;
