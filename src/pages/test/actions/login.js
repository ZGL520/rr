import {LOGINTEST, REGISTER} from "../constants/logintest";
// import {postRequest} from "../../../common/fetch/requests";
// const datas = {name : "zgl", password : "123456"};
// console.log(datas);
const logintest = (data) => {
    return {
        type:LOGINTEST,
        data
    }
}

export default logintest;
