import React from 'react';
import bindActionCreators from 'redux'
import {render} from 'react-dom';
import Header from '../../Header/components';
import { postRequest} from '../../../common/fetch/requests';
import querystring from 'querystring';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import loginstatusActionlogined from '../actions/index'
import LoginUi from '../components/index'

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }


  loginsub = () => {
      const url = 'http://kb.buyercamp.com/apir/user/login';
      const da = querystring.stringify(this.props.logininfotest.values);
      const logind = postRequest(url,da);
      logind.then((res) => {
          this.props.loginstatusActionlogined(res.data.content);
      });
  }
  render(){

      if (this.props.logintoken.status == "logining"){
          this.loginsub()

          return(
              <div>
                  <Header title='用户登录' rightLink='/' rightLinkContent='返回'/>
                  <p>正在登陆</p>
              </div>
          )
      }else if (this.props.logintoken.status == "unlogin"){
          return(
              <div>
                  <Header title='用户登录' rightLink='/' rightLinkContent='返回'/>
                  <div>
                      <p style={{wordWrap:'break-word'}}><span>token:{this.props.logintoken.token}</span>{}</p>
                  </div>
                  <LoginUi/>
              </div>

          )
      }else if (this.props.logintoken.status == "logined"){
          return(
              <div>
                  <Header title='用户登录' rightLink='/' rightLinkContent='返回'/>
                  <p>登录成功</p>
              </div>
          )
      }

  }
}
function mapStateToProps(state) {
    return{
        logintoken:state.loginstatusReducer,
        logininfotest:state.form.testlogin
    }
}
export default connect(mapStateToProps,loginstatusActionlogined)(LogIn)
