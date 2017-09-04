import * as actionType from '../constants/posts';
import { getRequest,postRequest,deleteRequest } from '../fetch/requests';
import db from '../db'

const GET_POST_URL = db.getPosts;

function fetchPosts() {
    const request = getRequest(GET_POST_URL);
    return {
        type:actionType.FETCH_POSTS,
        payload:request
    }
}


function createPost(values,callback) {
    const request =  postRequest(GET_POST_URL,values)
        .then(()=>callback())
        .catch((error)=>{
            console.log('error:',error);
        });
    return {
        type:actionType.CREATE_POST,
        payload:request
    }
}

function fetchPost(id) {
    const request = getRequest(GET_POST_URL+id);
    return {
        type:actionType.FETCH_POST,
        payload:request
    }
}

function deletePost(id,callback) {
    const request = deleteRequest(GET_POST_URL,id)
        .then(()=>callback());
    return {
        type:actionType.DELETE_POST,
        payload:id
    }
}

export {
    fetchPosts,
    fetchPost,
    createPost,
    deletePost
}
