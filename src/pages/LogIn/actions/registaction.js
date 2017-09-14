import {
    REGISTSTATUSFIELD, REGISTSTATUSINITIT, REGISTSTATUSOTHER, REGISTSTATUSREGISTTING,
    REGISTSTATUSSUCCESS
} from "../constants/index";

const registstatussuccess = data => {
    return{
        type:REGISTSTATUSSUCCESS,
        data:data
    }
};

const registstatusregistting = data => {
    return{
        type:REGISTSTATUSREGISTTING,
        data:data
    }
};

const registstatusfield = data =>{
    return {
        type:REGISTSTATUSFIELD,
        data:data
    }
};
const registstatusother = data =>{
    return {
        type:REGISTSTATUSOTHER,
        data:data
    }
};
const registstatusinitit = () =>{
    return {
        type:REGISTSTATUSINITIT,
    }
};

export default {registstatusfield,registstatussuccess,registstatusregistting,registstatusother,registstatusinitit}