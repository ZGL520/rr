
import React from 'react';
import {render} from 'react-dom';
// import { HashRouter as Router, Route,Switch} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import { Router,Route,hashHistory,indexRoute,Link} from 'react-router';

// 引入 redux
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory'
import configureStore from './src/common/store/configureStore'
// 通用样式
import './src/common/static/css/common.less';
import './src/common/static/css/font.css';


// import 页面组件
import Homepages from './src/pages/homepages/containers/index'


const store = configureStore();
const history = createHistory();



render(
    <Provider store={store} >
    <Router history={history}>
        <Switch>
            <Route path ='/' component={Homepages}/>
            <Route render={()=>{
                    return (
                        <h1>Not Found</h1>
                    )
            }}/>
        </Switch>
    </Router>
    </Provider>,
    document.getElementById('app')
);
