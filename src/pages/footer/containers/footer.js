import React from 'react'
import {Link} from 'react-router-dom'
import Login from "../../LogIn/containers/index";
import Customercentre from "../../customercentre/container/index";
import Cart from "../../cart/containers/index";
import { Router,Route,hashHistory,IndexRoute} from 'react-router';
import Hostpage from "../../hostpage/containers/index";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div>
                    {/*<div>*/}
                        {/*<Route path='/' component={Hostpage}/>*/}
                        {/*<Route path='/cart' component={Cart}/>*/}
                        {/*<Route path='/customercentre' component={Customercentre}/>*/}
                        {/*<Route path='/login' component={Login}/>*/}
                    {/*</div>*/}
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/cart">购物车</Link></li>
                        <li><Link to="/customercentre">个人中心</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Footer;