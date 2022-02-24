const coursesReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCH_ACTIVE_COURSES":
			return action.payload;
		case "FETCH_ALL_COURSES":
			return action.payload;
		default:
			return state;
	}
};

export default coursesReducer;
