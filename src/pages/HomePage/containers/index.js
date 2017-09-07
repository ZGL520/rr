import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../../pages/Header/components';
import LoginStatus from '../components/longinstatus'
const Item = List.Item;

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    render() {
        return (
            <div>
                <Header title='标题' rightLink='/' rightLinkContent='主页'/>
                <List className="my-list">
                    <Item><Link className='fontBlack' to="/login">用户登陆</Link></Item>
                    <Item><Link className='fontBlack' to="/contactus">联系我们</Link></Item>
                    <Item><Link className="fontBlack" to="/test">登录测试</Link></Item>
                    <Item><Link className="fontBlack" to="/test1">请求测试</Link></Item>
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

export default HomePage;

