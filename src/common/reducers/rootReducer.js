import {combineReducers} from 'redux';
import PostsReducer from './postsReducer';
import { reducer as formReducer } from 'redux-form'
import loginstatusReducer from '../../pages/LogIn/reducers/index'
import registstatusreducer from '../../pages/LogIn/reducers/registreducer'


const rootReducer = combineReducers({
    posts:PostsReducer,
    form:formReducer,
    loginstatusReducer,
    registstatusreducer
});



export default rootReducer;
