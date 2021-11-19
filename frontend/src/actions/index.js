export const darkModeOn = () => {
    localStorage.setItem("darkMode", true);
    return {
        type: "DARK_ON",
        payload: true
    }
}

export const darkModeOff = () => {
    localStorage.setItem("darkMode", false);
    return {
        type: "DARK_OFF",
        payload: false
    }
}


