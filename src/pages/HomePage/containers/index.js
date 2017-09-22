import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PropTypes from 'prop-types'

// 引入组件
import Header from '../../../pages/Header/components';
import LoginStatus from '../components/longinstatus';
import loginstatusAction from '../../LogIn/actions/index';
import Footer from '../../footer/containers/index'


const Item = List.Item;

class HomePage extends React.Component {
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



    render() {
        return (
            <div>
                <Header title='home' rightLink='/login' rightLinkContent='登录/注册'/>
                <List>
                    <Item><Link className='fontBlack' to="/contactus">联系我们</Link></Item>
                </List>
                <div className='loginstatus'>
                    <h3>登陆状态</h3>
                    <div>
                        <LoginStatus/>
                    </div>
                </div>
                <Footer/>


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
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

