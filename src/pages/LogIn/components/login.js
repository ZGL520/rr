import React from 'react'
import {Field,reduxForm} from 'redux-form';

// input组件
class inputField extends React.Component{
    render(){
        let {label,input,type} = this.props;
        return(
            <div>
                <label>{label}</label>
                <input {...input} placeholder={label} type={type} style={{marginTop:20+'px'}} />
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
// 定义样式
    style = {
        textAlign:'center',
    };
    btn = {
        backgroundColor:'green',
        width:'70%',
        height:'32px',
        lineHeight:'32px',
        marginTop:'20px'
    };

    // 点击提交时出发函数
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginfun();
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={this.style}>
                    <div>
                        <p>登录</p>
                    </div>
                    <Field name="username" component={inputField}/>
                    <Field name="password" component={inputField}/>
                    <button type="submit" style={this.btn}>submit</button>
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
