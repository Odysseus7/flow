import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import projectsReducer from './projectsReducer';
import coursesReducer from './coursesReducer';


export default combineReducers({
    darkMode: darkModeReducer,
    projects: projectsReducer,
    courses: coursesReducer
});