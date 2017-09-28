import {LOGINSTATUSFIELD, LOGINSTATUSLOGINED, LOGINSTATUSLOGINING, LOGINSTATUSUNLOGIN} from "../constants/index";

// 用户登录状态
const loginstatusReducer = (state={status:'unlogin',account:'',token:'',msg:''}, action) => {
    switch (action.type){
        case LOGINSTATUSUNLOGIN:
            return state = {status:'unlogin',account:'',token:'',msg:''};
        case LOGINSTATUSLOGINED:
            return state = {status:'logined',account:action.account,token:action.token,msg:''};
        case LOGINSTATUSLOGINING:
            return state = {status:'logining',account:'',token:''};
        case LOGINSTATUSFIELD:
            return state = {status:'loginfield',account:'',token:'',msg:action.data};
        default:
            return state
    }
};
export default loginstatusReducer;