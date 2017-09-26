import React from 'react';
import {render} from 'react-dom';
import Header from '../../Header/containers/index';
import {postRequest} from '../../../common/fetch/requests';
import querystring from 'querystring';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import loginstatusAction from '../actions/index'
import LoginUi from '../components/index'

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }


  loginSub = () => {
      const url = 'http://kb.buyercamp.com/apir/user/login';
      const da = querystring.stringify(this.props.logininfotest.values);
      const logind = postRequest(url,da);
      logind.then((res) => {
          // 将登录返回数据添加到sessionStorage
          sessionStorage.setItem('bkusername',res.data.content.username);
          sessionStorage.setItem('bktoken',res.data.content.user_token);
          // 从sessionStorage获取用户存储的信息
          const username = sessionStorage.getItem('bkusername');
          const usertoken = sessionStorage.getItem('bktoken');
          const datas = {username,usertoken};
          // 将用户信息存储到store
          this.props.loginactions.loginstatusActionlogined(datas);
      });
  };

  render(){
      // 根据登录状态输出不同信息
      if (this.props.logintoken.status == "logining"){
          this.loginSub();
          return(
              <div className='userloginstatus'>
                  {/*<Header title='用户登录' rightLink='/' rightLinkContent='返回'/>*/}
                  <p>正在登陆</p>
              </div>
          )
      }else if (this.props.logintoken.status == "unlogin"){
          return(
              <div className='userloginstatus'>
                  {/*<Header title='用户登录' rightLink='/' rightLinkContent='返回'/>*/}
                  <LoginUi/>
              </div>

          )
      }else if (this.props.logintoken.status == "logined"){
          return(
              <div className='userloginstatus'>
                  {/*<Header title='用户登录' rightLink='/' rightLinkContent='返回'/>*/}
                  <p>登录成功</p>
              </div>
          )
      }

  }
}


const mapStateToProps = state => {
    return{
        logintoken:state.loginstatusReducer,
        logininfotest:state.form.testlogin
    }
};

const mapDispatchToProps = dispatch => {
    return{
        loginactions:bindActionCreators(loginstatusAction,dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(LogIn)
