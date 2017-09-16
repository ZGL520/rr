import {combineReducers} from 'redux';
import PostsReducer from './postsReducer';
import { reducer as formReducer } from 'redux-form'
import loginstatusReducer from '../../pages/LogIn/reducers/index'
import registstatusreducer from '../../pages/LogIn/reducers/registreducer'
import navbarreducer from '../../pages/Header/reducers/index'


const rootReducer = combineReducers({
    posts:PostsReducer,
    form:formReducer,
    loginstatusReducer,
    registstatusreducer,
    navbarreducer
});



export default rootReducer;
