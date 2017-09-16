import React from 'react'
import registaction from "../actions/registaction";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Configbutton extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.registactions.registstatusinitit('');

    };

    render(){
        return(
            <div>
                <button className="button" onClick={this.handleClick}>确定</button>
            </div>
        )


    }
}


const mapStateToProps = state => {
    return {
        registstatuss:state.registstatusreducer
    }
};
const mapDispatchToState = dispatch => {
    return{
        registactions:bindActionCreators(registaction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Configbutton)