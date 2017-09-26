import React from 'react';
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route,Switch,IndexRoute} from 'react-router-dom';
import Hostpage from '../../hostpage/containers/index'

import PropTypes from 'prop-types'

// 引入组件
import Header from '../../Header/containers/index';
import LoginStatus from '../../LogIn/components/longinstatus';
import loginstatusAction from '../../LogIn/actions/index';
import Footer from '../../footer/containers/footer'
import Homefooter from '../../footer/containers/index'
import Cart from '../../cart/containers/index'
import Customercentre from "../../customercentre/container/index";
import Body from './body'


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title='home' rightLink='/login' rightLinkContent='登录/注册'/>
                <Body/>
            </div>
        )
    }
}


export default HomePage;

