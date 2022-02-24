import base from "../apis/base";

export const fetchBooks = () => async (dispatch) => {
	const response = await base.get("/books?status=active");
	dispatch({
		type: "FETCH_ACTIVE_BOOKS",
		payload: response.data,
	});
};

export const fetchAllBooks = () => async (dispatch) => {
	const response = await base.get("/books");
	dispatch({
		type: "FETCH_ALL_BOOKS",
		payload: response.data,
	});
};
