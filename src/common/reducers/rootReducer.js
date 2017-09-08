import {combineReducers} from 'redux';
import PostsReducer from './postsReducer';
import { reducer as formReducer } from 'redux-form'
import loginstatusReducer from '../../pages/LogIn/reducers/index'


const rootReducer = combineReducers({
    posts:PostsReducer,
    form:formReducer,
    loginstatusReducer,
});



export default rootReducer;
