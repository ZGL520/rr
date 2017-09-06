import React from 'react'
import LoginUiform from './login'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class LoginUi extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentWillMount(){
        // console.log(this.props);
        // console.log(this.props.loginsub,'asdf');
        // console.log(this.props.loginsub);
    }

    render(){
        return (
            <div>
                <h1>登陆测试</h1>
                <LoginUiform style={this.style}/>
            </div>
        )
    }
}




export default LoginUi
