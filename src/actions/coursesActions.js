import base from "../apis/base";

export const fetchCourses = () => async dispatch => {
    const response = await base.get("/courses");
    dispatch({
        type: "FETCH_COURSES",
        payload: response.data
    });
}