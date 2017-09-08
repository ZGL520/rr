import React from 'react'
import LoginUiform from './login'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { bindActionCreators } from 'redux'
import loginstatusActionlogining from '../actions/index'

// import {login,loginstatusActionlogining,loginstatusActionlogined,loginstatusActionunlogin} from '../actions/index'
// import loginstatusActionlogining from '../actions/index'
class LoginUi extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentWillMount(){
        // console.log(this.props.loginfun.loginstatusActionlogining)
        // console.log(this.props.logininfotest)
        // console.log(this.props.logintests)
    }

    render(){
        return (
            <div>
                <h2>登陆测试</h2>
                <LoginUiform style={this.style} testlogin={this.props.logininfotest} loginfun={this.props.loginstatusActionlogining}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        // logininfotest:state.form.testlogin
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         loginfun: bindActionCreators(loginstatusActionlogining, dispatch),
//     }
// }


export default connect(mapStateToProps,loginstatusActionlogining)(LoginUi)
