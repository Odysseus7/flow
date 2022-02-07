import React from "react";

import { useHistory } from "react-router-dom";

const LogoutBtn = () => {
	const history = useHistory();
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuthenticated", false);
		history.push("/admin/login");
	};
	return (
		<button className="btn-primary" onClick={handleLogout}>
			Log out
		</button>
	);
};

export default LogoutBtn;
