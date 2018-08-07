import { combineReducers } from 'redux';
import memoryReducer from './memoryReducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    memories: memoryReducer
});

export default rootReducer;