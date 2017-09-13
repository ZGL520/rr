import React from 'react'
import {Field,reduxForm} from 'redux-form';

// input组件
class inputField extends React.Component{
    render(){
        let {label,input,type} = this.props;
        return(
            <div className='inputcomponent'>
                <div>
                    <input {...input} placeholder={label} type={type} label={label}/>
                </div>
            </div>
        )
    }
}

// 输入登陆信息组件
class LoginUiform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
        };
    }

    // 点击提交时出发函数
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginfun();
    };

    render(){
        return (
            <div className='loginform'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Sign in</p>
                        <p>Please sign-in using your existing account</p>
                    </div>
                    <Field name="username" component={inputField} label="Username or Email address"/>
                    <Field name="password" component={inputField} label="Password"/>
                    <button type="submit" >login</button>
                </form>
                <div>
                    <p>{this.state.name}</p>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form:'testlogin'
})(LoginUiform);
