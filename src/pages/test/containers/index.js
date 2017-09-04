import React,{ PropTypes, Component } from 'react'
import render from 'react-dom'
import {postRequest} from "../../../common/fetch/requests";
import querystring from 'querystring'
import axios from 'axios'
import store from '../../../../index';
import {dispatch} from 'redux';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import logintest from '../actions/login';
import AsyncApp from '../components/add';

class LogTest extends React.Component {
    constructor(props){
        super(props);
        this.logintest = [];
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){

        const url = 'http://kb.buyercamp.com/apir/user/login';
        const date = {username:'admin', password:123456};
        const da = querystring.stringify(date);
        axios.post(url,da).then(response => {
            this.setState({
                logintest:response.data
            });
            console.log(this.state.logintest)
        })
        // logintest(axios.post(url,da));
        // logintest(store.dispatch(logintest(axios.post(url,da))))
        // const data = axios.post(url,da)


    }
    render(){
        return(
            <div>
                <h1>hello,here is login test</h1>
                <AsyncApp/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userlogin:state.logint
    }
}
const mapDispatchToState = (state) => {
    return {
        logint:logintest(state.logintest)
    }
}
export default connect(mapStateToProps,mapDispatchToState)(LogTest);
