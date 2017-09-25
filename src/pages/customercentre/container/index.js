import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import { Router, Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import loginstatusAction from "../../LogIn/actions/index";
import LoginStatus from '../../LogIn/components/longinstatus';


class Customercentre extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        const username = sessionStorage.getItem('bkusername');
        const usertoken = sessionStorage.getItem('bktoken');
        if(username != null || usertoken != null){
            const datas = {username,usertoken};
            this.props.loginactions.loginstatusActionlogined(datas);
        }else {
            this.props.loginactions.loginstatusActionunlogin
        }
    }
    render(){
        return(
            <div>
                <List>
                    <Link className='fontBlack' to="/contactus">联系我们</Link>
                </List>
                <div className='loginstatus'>
                    <h3>登陆状态</h3>
                    <div>
                        <LoginStatus/>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        barstatu : state.navbarreducer
    }
}
const mapDispatchToProps = dispatch => {
    return{
        loginactions:bindActionCreators(loginstatusAction,dispatch),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Customercentre);