
import {LOGINTEST, REGISTER} from "../constants/logintest";
// import logintest from "../actions/login";




 function loginTest(state={}, action){
    switch (action.type){
        case LOGINTEST:
            return action.data;
        default:
            return state
    }
}

export default loginTest;