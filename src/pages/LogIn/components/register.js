import React from 'react'
import {fpostRequest, postRequest} from "../../../common/fetch/requests";
import querystring from 'querystring'
import Registerui from './registerui'
class Register extends React.Component{
    componentDidMount(){
        // const register = {email:'zglin@gmail.com',password:88888888};
        // const url = 'http://kb.buyercamp.com/apir/user/register';

        // const registerdata = querystring.stringify(register);
        // console.log(registerdata);
        // fpostRequest(url,registerdata).then(res => {
        //     console.log(res)
        // });
        // postRequest(url,registerdata).then((res) => {
        //     console.log(res)
        // })
    }
    render(){
        return(
            <div>
                <p>注册</p>
                <Registerui/>
            </div>
        )
    }
}

export default Register;