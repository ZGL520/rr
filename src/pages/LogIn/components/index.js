import React from 'react'
import LoginUiform from './login'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import loginstatusActionlogining from '../actions/index'
class LoginUi extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div>
                <h2>登陆测试</h2>
                <LoginUiform style={this.style} loginfun={this.props.loginstatusActionlogining}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        // logininfotest:state.form.testlogin
    }
}

export default connect(mapStateToProps,loginstatusActionlogining)(LoginUi)
