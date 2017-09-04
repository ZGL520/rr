
import 'whatwg-fetch'
import 'es6-promise'
import axios from 'axios';
import querystring from 'querystring'


function qspost(url,val) {
  axios.post(url,querystring.stringify(val))
}
function getRequest(url) {

    var result = axios({
        method: 'get',
        url: url,
    });

    return result;
}

function fpostRequest(url, userObj) {

    var result = fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    });

    return result;
}

function postRequest(url, obj) {
    var result = axios({
        method:'post',
        url:url,
        data:obj
    });
    return result;
}

function putRequest(url,userId,userObj) {
    var result = fetch(url+userId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    });

    return result;
}
function deleteRequest(url,id) {
    var result = axios({
        method:'delete',
        url:url+id
    });
    return result;
}



export {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
    fpostRequest,
    qspost
}
