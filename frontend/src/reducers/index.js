import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import projectsReducer from './projectsReducer';


export default combineReducers({
    projects: projectsReducer,
    darkMode: darkModeReducer
});