// import { fetchProjects } from "./projectsActions";

export const darkModeOn = () => {
    return {
        type: "DARK_ON",
        payload: true
    }
}

export const darkModeOff = () => {
    return {
        type: "DARK_OFF",
        payload: false
    }
}

// export { fetchProjects };

