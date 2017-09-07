import React from 'react'
import LoginUiform from './login'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class LoginUi extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <h1>登陆测试</h1>
                <LoginUiform style={this.style} testlogin={this.props.logininfotest}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        logininfotest:state.form.testlogin
    }
}

export default connect(mapStateToProps)(LoginUi)
