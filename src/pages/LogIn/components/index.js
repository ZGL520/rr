import React from 'react'
import LoginUiform from './login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import loginstatusAction from '../actions/index'


class LoginUi extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentWillMount(){
        // console.log(this.props.loginactions)
    }

    render(){
        return (
            <div>
                <h2>登陆测试</h2>
                <LoginUiform style={this.style} loginfun={this.props.loginactions.loginstatusActionlogining}/>
            </div>
        )
    }


}


const mapStateToProps = state => {
    return {
        logininfotest:state.form.testlogin
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loginactions:bindActionCreators(loginstatusAction,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginUi)
