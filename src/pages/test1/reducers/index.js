import {INVALIDATE_SUBREDDITD, RECEIVE_POSTD, REQUEST_POSTD, SELECT_SUBREDDITD} from "../constants/index";

function selectedsubredditd(state = 'logind', action) {
    switch (action.type){
        case SELECT_SUBREDDITD:
            return action.subreddit
        default:
            return state
    }
}

function postsd(state = {
    isFetching:false,
    didInvalidate:false,
    item:[]
},action) {
    switch (action.type){
        case INVALIDATE_SUBREDDITD:
            return Object.assign({},state,{
                didInvalidate:false
            });
        case REQUEST_POSTD:
            return Object.assign({},state,{
                isFetching:true,
                didInvalidate:false
            });
        case REQUEST_POSTD:
            return Object.assign({},state,{
                isFetching:false,
                didInvalidate:false,
                item:action.posts,
                lastUpdated:action.receivedAt
            })
        default:
            return state
    }
}

function postsBySubredditd(state={},action) {
    switch (action.type){
        case INVALIDATE_SUBREDDITD:
        case REQUEST_POSTD:
        case RECEIVE_POSTD:
            return Object.assign({},state,{
                [action.subreddit]:postsd(state[action.subreddit],action)
            })
        default:
            return state
    }
}

export {selectedsubredditd,postsBySubredditd};