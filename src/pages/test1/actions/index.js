import {INVALIDATE_SUBREDDITD, RECEIVE_POSTD, SELECT_SUBREDDITD} from "../constants/index";
import querystring from 'querystring'
// import 'whatwg-fetch'
import fetch from 'isomorphic-fetch'
export function selectSubredditd(subreddit) {
    return {
        type:SELECT_SUBREDDITD,
        subreddit
    }
}

export function invalidatesubredditd(subreddit) {
    return {
        type:INVALIDATE_SUBREDDITD,
        subreddit
    }
}

export function requestPostsd(subreddit) {
    return {
        type:RECEIVE_POSTD,
        subreddit
    }
}

export function receivePostsd(subreddit,json) {
    return {
        type:RECEIVE_POSTD,
        subreddit,
        postsd:json.data.children.map(child => child.data),
        receivedAt:Date.now()
    }
}

export function fetchPostsd(subreddit) {
    return function (dispatch) {
        dispatch(requestPostsd(subreddit));
        const url = 'http://kb.buyercamp.com/apir/user/login';
        const video = {
            username:'admin',
            password:123456
        };
        const da = querystring.stringify(video);
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json =>
                dispatch(receivePostsd(subreddit,json))
            )
    }
}

function sholdFetchPostsd(state,subreddit) {
    const posts = state.postsBySubredditd[subreddit]
    if (!posts) {
        return true
    }else if (posts.isFetching){
        return false
    }else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeededd(subreddit) {
    return (dispatch,getState) => {
        if (shouldFetchPosts(getState(),subreddit)){
            return dispatch(fetchPostsd(subreddit))
        }else {
            return Promise.resolve()
        }
    }
}