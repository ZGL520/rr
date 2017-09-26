import React from 'react'
import Footer from './footer'
import Customercentre from "../../customercentre/container/index";
import Cart from "../../cart/containers/index";
import Hostpage from "../../hostpage/containers/index";
import Login from "../../LogIn/containers/index";
import { Router,Route,hashHistory,IndexRoute} from 'react-router';
import HomePage from "../../HomePage/containers/index";


class Homepageroute extends React.Component{
    render(){
        return(
            <div>
                {/*<IndexRoute component={Hostpage}/>*/}
                <Route path='/' component={Hostpage}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/customercentre' component={Customercentre}/>
                <Route path='/login' component={Login}/>
            </div>
        )
    }
}
class Homefooter extends React.Component{
    render(){
        return(
            <div>
                <Homepageroute/>
                <Footer/>
                {this.props.children}
            </div>
        )
    }
}

export default Homefooter