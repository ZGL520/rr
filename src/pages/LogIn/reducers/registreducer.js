import {
    REGISTSTATUSFIELD, REGISTSTATUSINITIT, REGISTSTATUSOTHER, REGISTSTATUSREGISTTING,
    REGISTSTATUSSUCCESS
} from "../constants/index";

const registstatusreducer = (state = {status:''}, action) => {
    switch (action.type){
        case REGISTSTATUSFIELD:
            return state = {status:'field',data:action.data};
        case REGISTSTATUSREGISTTING:
            return state = {status:'regidtting',data:action.data};
        case REGISTSTATUSSUCCESS:
            return state = {status:'success',data:action.data};
        case REGISTSTATUSOTHER:
            return state = {status:'other',data:action.data};
        case REGISTSTATUSINITIT:
            return state = {status:'',data:''};
        default:
            return state
    }
};

export default registstatusreducer;