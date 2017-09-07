import React from 'react';
import {render} from 'react-dom';
import Header from '../../Header/components';
import { postRequest} from '../../../common/fetch/requests';
import querystring from 'querystring';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import login from '../actions/login'
import LoginUi from '../components/index'

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount(){
      const url = 'http://kb.buyercamp.com/apir/user/login';
      const date = {
          username:'admin',
          password:123456
      };
      const da = querystring.stringify(date);
      const logind = postRequest(url,da);
      logind.then((res) => {
          sessionStorage.setItem(login,res.data.content.user_token);
          const logininfo = sessionStorage.getItem(login);
          this.props.login(logininfo);
      });
  }
  render(){
    return(
      <div>
        <Header title='用户登录' rightLink='/' rightLinkContent='返回'/>
          <div>
              <p style={{wordWrap:'break-word'}}><span>token:</span>{this.props.logintoken}</p>
          </div>
        <LoginUi/>
      </div>

    )
  }
}
function mapStateToProps(state) {
    return{
        logintoken:state.Login,
    }
}
export default connect(mapStateToProps,{login})(LogIn)
