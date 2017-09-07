import {LOGINSTATUSLOGINED, LOGINSTATUSLOGINING, LOGINSTATUSUNLOGIN,LOGIN} from "../constants/index";


const loginstatusReducer = (state={status:'unlogin'}, action) => {
    switch (action.type){
        case LOGIN:
            return state.loginStatus = {};
        case LOGINSTATUSUNLOGIN:
            return state.loginStatus = {status:'unlogin',};
        case LOGINSTATUSLOGINED:
            return state.loginStatus = {status:'logined',account:action.data};
        case LOGINSTATUSLOGINING:
            return state.loginStatus = {status:'logining',account:''};
        default:
            return state
    }
};

export default loginstatusReducer;