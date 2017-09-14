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
        console.log(this.props.registactions);
        this.props.registactions.registstatusinitit('');
        console.log(this.props.registstatuss.status);

    };

    render(){

        // if(this.props.registstatuss.status == 'success'){
        //     return(
        //         <div>
        //             <button className="button" onClick={this.handleClick(this.props.registactions.registstatusinitit(''))}>去登陆</button>
        //         </div>
        //     )
        // }else if(this.props.registstatuss.status == 'field') {
        //     return(
        //         <div>
        //             <button className="button" onClick={this.handleClick(this.props.registactions.registstatusinitit(''))}>重新注册</button>
        //         </div>
        //     )
        // }
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