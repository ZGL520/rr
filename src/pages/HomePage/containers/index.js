import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile';
import Header from '../../../pages/Header/components';
const Item = List.Item;

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header title='标题' rightLink='/posts' rightLinkContent='我的app'/>
                <List className="my-list">
                    <Item><Link className='fontBlack' to="/login">用户登陆</Link></Item>
                    <Item><Link className='fontBlack' to="/contactus">联系我们</Link></Item>
                    <Item><Link className="fontBlack" to="/test">登录测试</Link></Item>
                    <Item><Link className="fontBlack" to="/test1">请求测试</Link></Item>
                </List>
            </div>
        )
    }
}


export default HomePage;
