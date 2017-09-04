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
          console.log(res.data);
          sessionStorage.setItem(login,res.data.content.user_token);
          // sessionStorage.setItem(login.id,res.data.content.id);
          const logininfo = sessionStorage.getItem(login);
          console.log(logininfo);
          this.props.login(logininfo);
      });
  }
  render(){
    return(
      <div>
        <Header title='用户登录' rightLink='/' rightLinkContent='返回'/>
        <LoginUi/>
      </div>

    )
  }
}
function mapStateToProps(state) {
    return{
        login:state.login,
    }
}
export default connect(mapStateToProps,{login})(LogIn)
