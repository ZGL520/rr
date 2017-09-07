

import {LOGIN} from "../constants/index";

// const loginstatusActionlogined = function(data) {
//     return{
//         type:LOGINSTATUSLOGINED,
//         data
//     };
// };
// const loginstatusActionlogining = data => {
//     return{
//         type:LOGINSTATUSLOGINING,
//         data
//     };
// };
// const loginstatusActionunlogin = data => {
//
//     return{
//         type:LOGINSTATUSUNLOGIN,
//         data
//     }
// };

const login = function(data) {
    return {
        type:LOGIN,
        data
    }
};

export default login;

// export default {loginstatusActionlogined,loginstatusActionlogining,loginstatusActionunlogin,logIn};