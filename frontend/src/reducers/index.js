import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import projectsReducer from './projectsReducer';
import coursesReducer from './coursesReducer';
import booksReducer from './booksReducer';



export default combineReducers({
    darkMode: darkModeReducer,
    projects: projectsReducer,
    courses: coursesReducer,
    books: booksReducer
});