import React from 'react'
import {Link} from 'react-router-dom'
import { Router,Route,hashHistory,IndexRoute} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/cart">购物车</Link></li>
                        <li><Link to="/customercentre">个人中心</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}



export default Footer;