import React from 'react';
import {connect} from 'react-redux'

class LoginStatus extends React.Component{
    componentDidMount(){
        console.log(this.props.loginstatus)
    }
    render(){

            if(this.props.loginstatus.status == "unlogin"){
                return(
                    <div>
                        <p>未登录</p>
                    </div>
                )
            }else if(this.props.loginstatus.status == 'logining'){
                return(
                    <div>
                        <p>正在登录</p>
                    </div>
                )
            }else if(this.props.loginstatus.status == 'logined'){
                return(
                    <div>
                        <p>已登录</p>
                    </div>
                )
            }else {
                return(
                    <div>
                        <p>错误</p>
                    </div>
                )
            }
    }

}
const mapStateToProps = state => {
    return {
        loginstatus:state.loginstatusReducer
    }
};
export default connect(mapStateToProps)(LoginStatus);