import React from 'react'
import Logind from '../components/index';
import {connect} from 'react-redux'
import logind from '../reducers/index'

class Logindd extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>这里是</h1>
                <Logind/>
            </div>
        )
    }
}

// export default Logindd;

// Loginddfunction mapStateToProps(state) {
//     return {
//         logind:state.logind
//     }
// }
//
// function mapDispatchToState(state) {
//     return {
//         logind:logind(state,logind)
//     }
// }

export default Logindd