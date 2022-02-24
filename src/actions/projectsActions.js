import base from "../apis/base";

export const fetchProjects = () => async (dispatch) => {
	const response = await base.get("/projects?status=active");
	dispatch({
		type: "FETCH_PROJECTS",
		payload: response.data,
	});
};

export const fetchAllProjects = () => async (dispatch) => {
	const response = await base.get("/projects");
	dispatch({
		type: "FETCH_ALL_PROJECTS",
		payload: response.data,
	});
};
