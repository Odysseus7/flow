import base from "../apis/base";

export const fetchProjects = () => async dispatch => {
    const response = await base.get("/projects");
    dispatch({
        type: "FETCH_PROJECTS",
        payload: response.data
    });
}
