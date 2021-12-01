import base from '../apis/base';

export const fetchBooks = () => async dispatch => {
    const response = await base.get('/books');
    dispatch({
        type: "FETCH_BOOKS",
        payload: response.data
    });
}