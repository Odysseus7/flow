import axios from "axios";

export const admin = axios.create({
	baseURL: `${process.env.REACT_APP_API_BASE}/admin`,
});

export default axios.create({
	baseURL: `${process.env.REACT_APP_API_BASE}/api/v1`,
	headers: {
		"Content-Type": "application/json",
		"x-access-token": localStorage.getItem("token"),
	},
});
