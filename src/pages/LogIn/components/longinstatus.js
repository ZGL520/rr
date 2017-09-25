import React from 'react';
import {connect} from 'react-redux'

// 登录状态
class LoginStatus extends React.Component{
    componentWillMount(){
        // console.log(sessionStorage.getItem('bkusername'));
        // console.log(sessionStorage.getItem('bktoken'));
    }
    render(){

            if(this.props.loginstatus.status == "unlogin"){
                return(
                    <div className='iflogin'>
                        <p>未登录</p>
                    </div>
                )
            }else if(this.props.loginstatus.status == "logining"){
                return(
                    <div className='iflogin'>
                        <p>正在登录</p>
                    </div>
                )
            }else if(this.props.loginstatus.status == "logined"){
                return(
                    <div className='iflogin'>
                        <p>已登录</p>
                        <p><span>账号:</span><span>{this.props.loginstatus.account}</span></p>
                        <p><span>token:</span><span>{this.props.loginstatus.token}</span></p>
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