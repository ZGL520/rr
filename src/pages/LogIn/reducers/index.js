import {LOGIN} from "../constants/index";

function Login(state = [], action) {
    switch (action.type){
        case LOGIN:
            return action.data
        default:
            return state
    }
}

export default Login;