import {NAVBARHIDE, NAVBARSHOW} from "../constants/index";

const navbarshow = () =>{
    return{
        type:NAVBARSHOW
    }
}

const navbarhide = () => {
    return{
        type:NAVBARHIDE
    }
}

export default {navbarhide,navbarshow}