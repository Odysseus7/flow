const darkModeReducer = (state = localStorage.getItem("darkMode"), action) => {
    switch(action.type) {
        case "DARK_ON":
            return action.payload;
        case "DARK_OFF":
            return action.payload;
        default:
            return state;
    }

}

export default darkModeReducer;