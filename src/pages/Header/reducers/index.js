import {NAVBARHIDE, NAVBARSHOW} from "../constants/index";

const navbarreducer = (state={status:''},action) => {
    switch (action.type){
        case NAVBARSHOW:
            return state = {status:'show'};
        case NAVBARHIDE:
            return state = {status:'hide'};
        default:
            return state
    }
};

export default navbarreducer;