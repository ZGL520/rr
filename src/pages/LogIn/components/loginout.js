import React from 'react'
import {postRequest} from "../../../common/fetch/requests";
import loginstatusAction from "../actions/index";
import {bindActionCreators} from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import querystring from 'querystring'

import {connect} from 'react-redux'

class Loginout extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            displays:'none'
    }


    }
    handleloginoutdel = (e) => {
        e.preventDefault();
        this.setState(
            {displays:'block'}
        )
    };
    handleloginout = (e) => {
        e.preventDefault();
        const url = 'http://kb.buyercamp.com/apir/user/loginOut';
        const datas = {user_token:this.props.loginstatus.token};
        const data = querystring.stringify(datas);
        postRequest(url,data).then(res => {
            if (res.status == 200 ){
                // console.log(res)
            }
        }).catch(error => {
            if (error.response.status == 406){
                // console.log(error.response.data.success);
            }else {
                // console.log(error.response.data.errorMsg);

            }
        });
        sessionStorage.removeItem('bkusername');
        sessionStorage.removeItem('bktoken');
        this.props.loginactions.loginstatusActionunlogin();

    };
    render(){
        let style = {display:this.state.displays};
        return(
            <div className='loginout'>
                <div className='loginoutconfig' style={style}>
                    <div>
                        <p>确定注销吗</p>
                        <button className="button" onClick={this.handleloginout}>确定</button>
                    </div>
                </div>
                <p onClick={this.handleloginout}>注销</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginstatus:state.loginstatusReducer
    }
}
const mapDispatchToProps = dispatch => {
    return{
        loginactions:bindActionCreators(loginstatusAction,dispatch),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Loginout);
