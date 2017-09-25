
import React from 'react';
import {render} from 'react-dom';
// import { HashRouter as Router, Route,Switch} from 'react-router-dom';
import { Router, Route,Switch} from 'react-router-dom';

// 引入 redux
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory'
import configureStore from './src/common/store/configureStore'
// 通用样式
import './src/common/static/css/common.less';
import './src/common/static/css/font.css';


// import 页面组件
import HomePage from './src/pages/HomePage/containers';
import LogIn from './src/pages/LogIn/containers';
import ContactUs from './src/pages/contactus/containers';
import Hostpage from "./src/pages/hostpage/containers/index";
import Customercentre from "./src/pages/customercentre/container/index";
import Cart from "./src/pages/cart/containers/index";
import Header from './src/pages/Header/containers/index'
import Footer from './src/pages/footer/containers/index'


const store = configureStore();
const history = createHistory();

render(
    <Provider store={store} >
    <Router history={history}>
        <Switch>
            {/*<Header title='home' rightLink='/login' rightLinkContent='登录/注册'/>*/}
            <Route path ='/login' component={LogIn} />
            <Route path='/contactus' component={ContactUs}/>
            <Route path ='/' component={HomePage}/>
            <Route render={()=>{
                return (
                    <h1>Not Found</h1>
                )
            }}/>
            {/*<Footer/>*/}

        </Switch>
    </Router>
    </Provider>,
    document.getElementById('app')
);
