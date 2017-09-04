
import {combineReducers} from 'redux';
import PostsReducer from './postsReducer';
import Login from '../../pages/LogIn/reducers/index'
import loginTest from '../../pages/test/reducers/index'
import {selectedSubreddit,postsBySubreddit} from '../../pages/test/reducers/addreducer'
import { reducer as formReducer } from 'redux-form'
import {selectedsubredditd,postsBySubredditd} from '../../pages/test1/reducers/index'

const rootReducer = combineReducers({
    posts:PostsReducer,
    form: formReducer,
    Login:Login,
    logint:loginTest,
    selectedSubreddit,
    postsBySubreddit,
    selectedsubredditd,
    postsBySubredditd
});



export default rootReducer;
