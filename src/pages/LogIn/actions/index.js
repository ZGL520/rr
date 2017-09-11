import {LOGINSTATUSLOGINED, LOGINSTATUSLOGINING, LOGINSTATUSUNLOGIN} from "../constants/index";
// 已登录
const loginstatusActionlogined = function(data) {
    return{
        type:LOGINSTATUSLOGINED,
        account:data.username,
        token:data.usertoken
    };
};
// 正在登陆
const loginstatusActionlogining = function(data) {
    return{
        type:LOGINSTATUSLOGINING,
        data
    };
};
// 未登录
const loginstatusActionunlogin = data => {

    return{
        type:LOGINSTATUSUNLOGIN,
        data
    }
};

export default {loginstatusActionlogined,loginstatusActionlogining,loginstatusActionunlogin};