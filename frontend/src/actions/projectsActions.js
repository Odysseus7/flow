import base from "../apis/base";

export const fetchProjects = () => async dispatch => {
    const response = await base.get("/projects");
    dispatch({
        type: "FETCH_PROJECTS",
        payload: response.data
    });
}

export const fetchProject = (id) => async dispatch => {
    const response = await base.get(`/projects/${id}`);
    dispatch({
        type: "FETCH_PROJECT",
        payload: response.data
    });
}