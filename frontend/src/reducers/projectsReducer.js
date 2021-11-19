const projectsReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_PROJECTS":
            return action.payload;
        default:
            return state;
    }

}

export const projectReducer = (state = {}, action) => {
    switch(action.type) {
        case "FETCH_PROJECT":
            return action.payload;
        default:
            return state;
    }

}

export default projectsReducer;