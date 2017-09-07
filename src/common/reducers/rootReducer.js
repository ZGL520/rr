import {combineReducers} from 'redux';
import PostsReducer from './postsReducer';
import loginTest from '../../pages/test/reducers/index'
import {selectedSubreddit,postsBySubreddit} from '../../pages/test/reducers/addreducer'
import { reducer as formReducer } from 'redux-form'
import {selectedsubredditd,postsBySubredditd} from '../../pages/test1/reducers/index'
import loginstatusReducer from '../../pages/LogIn/reducers/index'


const rootReducer = combineReducers({
    posts:PostsReducer,
    form: formReducer,
    selectedSubreddit,
    postsBySubreddit,
    selectedsubredditd,
    postsBySubredditd,
    loginstatusReducer,
    loginTest
});



export default rootReducer;
