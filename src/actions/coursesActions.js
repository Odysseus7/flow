import base from "../apis/base";

export const fetchCourses = () => async (dispatch) => {
	const response = await base.get("/courses?status=active");
	dispatch({
		type: "FETCH_ACTIVE_COURSES",
		payload: response.data,
	});
};

export const fetchAllCourses = () => async (dispatch) => {
	const response = await base.get("/courses");
	dispatch({
		type: "FETCH_ALL_COURSES",
		payload: response.data,
	});
};
