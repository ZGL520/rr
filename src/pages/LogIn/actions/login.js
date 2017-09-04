import {LOGIN} from "../constants/index";
const login = function (data) {
    return {
        type:LOGIN,
        data
    }
}

export default login;

