import authReducer from './authReducer';
import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    item: itemsReducer
})

export default rootReducer;

