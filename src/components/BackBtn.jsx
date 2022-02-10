import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BackBtn = () => {
	let url;
	const location = useLocation();
	const pathname = location.pathname;
	const adminRoute = pathname.includes("admin");

	if (adminRoute) {
		url = "/admin/dashboard";
	} else {
		url = "/";
	}

	return (
		<Link to={url}>
			{pathname !== "/" && pathname !== "/admin/dashboard" ? (
				<div className="backBtn">
					<FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />
					&nbsp;Back
				</div>
			) : (
				""
			)}
		</Link>
	);
};

export default BackBtn;
