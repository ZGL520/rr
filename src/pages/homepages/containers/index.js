import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


import Customercentre from '../../customercentre/container/index'
import Hostpage from "../../hostpage/containers/index"
import Footer from '../../footer/containers/footer'
import Header from '../../Header/containers/index'
import LogIn from '../../LogIn/containers/index'
import ContactUs from '../../contactus/containers/index'
import Cart from '../../cart/containers/index'

const Homepages = () => (
    <Router>
        <div>
            <Header title='home' rightLink='/login' rightLinkContent='登录/注册'/>
            <Route exact path="/" component={Hostpage}/>
            <Route path="/customercentre" component={Customercentre}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/cart" component={Cart}/>
            <Footer/>
        </div>
    </Router>
);


export default Homepages;