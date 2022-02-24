import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function isTokenExpired(token) {
	return token.exp * 1000 < Date.now();
}

function clearLocalStorage() {
	localStorage.removeItem("token");
	localStorage.removeItem("isAuthenticated");
}

function redirectToLogin(history) {
	history.push("/admin/login");
}

export const checkToken = (token, history) => {
	try {
		const decodedToken = jwt_decode(token);
		localStorage.setItem("isAuthenticated", true);

		if (isTokenExpired(decodedToken)) {
			clearLocalStorage();
			redirectToLogin(history);
		}
	} catch {
		clearLocalStorage();
		redirectToLogin(history);
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
