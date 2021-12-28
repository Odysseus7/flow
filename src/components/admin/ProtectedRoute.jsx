import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function ProtectedRoute({ component: Component, ...restOfProps }) {
	const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
	const token = localStorage.getItem("token");
	const history = useHistory();
	if (token) {
		const decodedToken = jwt_decode(token);
		if (decodedToken.exp * 1000 < Date.now()) {
			localStorage.removeItem("token");
			localStorage.removeItem("username");
			localStorage.removeItem("id");
			localStorage.setItem("isAuthenticated", false);
			history.push("/admin/login");
		}
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
