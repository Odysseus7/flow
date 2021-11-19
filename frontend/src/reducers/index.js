import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import projectsReducer, { projectReducer } from './projectsReducer';


export default combineReducers({
    projects: projectsReducer,
    darkMode: darkModeReducer,
    project: projectReducer
});