import React from "react";

import { useHistory } from "react-router-dom";

const HeaderBtn = ({ text, isLogoutBtn }) => {
	const history = useHistory();
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuthenticated", false);
		history.push("/admin/login");
	};

	const goToAdmin = () => {
		history.push("/admin/dashboard");
	};

	return (
		<button
			className="btn-primary"
			onClick={isLogoutBtn ? handleLogout : goToAdmin}
		>
			{text}
		</button>
	);
};

export default HeaderBtn;
