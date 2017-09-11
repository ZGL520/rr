import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../../pages/Header/components';
import LoginStatus from '../components/longinstatus';
import {bindActionCreators} from 'redux'
import loginstatusAction from '../../LogIn/actions/index'
import {connect} from 'react-redux'
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
                <Header title='标题' rightLink='/' rightLinkContent='主页'/>
                <List className="my-list">
                    <Item><Link className='fontBlack' to="/login">用户登陆</Link></Item>
                    <Item><Link className='fontBlack' to="/contactus">联系我们</Link></Item>
                </List>
                <div>
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
        // logininfotest:state.form.testlogin
    }
}
const mapDispatchToProps = dispatch => {
    return{
        loginactions:bindActionCreators(loginstatusAction,dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

