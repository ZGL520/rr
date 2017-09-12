
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
import './src/common/static/index.less'


// import 页面组件
import HomePage from './src/pages/HomePage/containers';
import LogIn from './src/pages/LogIn/containers';
import ContactUs from './src/pages/contactus/containers/index';


const store = configureStore();
const history = createHistory();

render(
    <Provider store={store} >
    <Router history={history}>
        <Switch>
            <Route path ='/login' component={LogIn} />
            <Route path='/contactus' component={ContactUs}/>
            <Route path ='/' component={HomePage} />
            <Route render={( )=>{
                return (
                    <h1>Not Found</h1>
                )
            }}/>
        </Switch>
    </Router>
    </Provider>,
    document.getElementById('app')
);
