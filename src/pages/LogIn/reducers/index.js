import {LOGINSTATUSLOGINED, LOGINSTATUSLOGINING, LOGINSTATUSUNLOGIN} from "../constants/index";


const loginstatusReducer = (state={status:'unlogin',account:'',token:''}, action) => {
    switch (action.type){
        case LOGINSTATUSUNLOGIN:
            return state = {status:'unlogin',account:'',token:''};
        case LOGINSTATUSLOGINED:
            return state = {status:'logined',account:action.account,token:action.token};
        case LOGINSTATUSLOGINING:
            return state.status = {status:'logining',account:'',token:''};
        default:
            return state
    }
};
export default loginstatusReducer;