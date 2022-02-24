const booksReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCH_ACTIVE_BOOKS":
			return action.payload;
		case "FETCH_ALL_BOOKS":
			return action.payload;
		default:
			return state;
	}
};

export default booksReducer;
