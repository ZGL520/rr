import React from 'react'
import LoginUiform from './login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import loginstatusAction from '../actions/index'
import Register from './register'
import Customercentre from '../../customercentre/container/index'

class LoginUi extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    render(){
        return (
            <div className='loginui'>
                <LoginUiform style={this.style} loginfun={this.props.loginactions.loginstatusActionlogining}/>
                <Register/>
                <Customercentre/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        logininfotest:state.form.testlogin
    }
};

const mapDispatchToProps = dispatch => {
    return{
        loginactions:bindActionCreators(loginstatusAction,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginUi)
