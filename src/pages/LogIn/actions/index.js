import {LOGINSTATUSLOGINED, LOGINSTATUSLOGINING, LOGINSTATUSUNLOGIN} from "../constants/index";

const loginstatusActionlogined = function(data) {
    return{
        type:LOGINSTATUSLOGINED,
        account:data.username,
        token:data.user_token
    };
};
const loginstatusActionlogining = function(data) {
    return{
        type:LOGINSTATUSLOGINING,
        data
    };
};
const loginstatusActionunlogin = data => {

    return{
        type:LOGINSTATUSUNLOGIN,
        data
    }
};

export default {loginstatusActionlogined,loginstatusActionlogining,loginstatusActionunlogin};