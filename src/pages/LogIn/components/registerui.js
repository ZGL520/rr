import React from 'react'
import {Field,reduxForm} from 'redux-form'
import querystring from 'querystring'
import {postRequest} from "../../../common/fetch/requests";

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '请输入邮箱地址'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '请检查邮箱地址格式'
    }

    if (!values.password){
        errors.password = '请输入密码';
    }else if (values.password.length < 8 ){
        errors.password = '请输入六位及以上密码'
    }else if (isNaN(Number(values.password))){
        errors.password = '必须是数字'
    }

    return errors
};

class rederField extends React.Component{
    render(){
        let {input,label,type,meta:{touched,error,warning}} = this.props;
        return(
            <div className='inputcomponent'>
                <div>
                    <input {...input} placeholder={label} type={type} className="form-control"/>
                </div>
                <p>{touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-danger">{warning}</span>))}</p>            </div>
        )
    }
}



class Registerui extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            registe:''
        }
    }
    componentDidMount(){
        // console.log(this.props.registersactions)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.registersactions.registstatusregistting('registting');
        // console.log(this.props.registers.values);
        const data = querystring.stringify(this.props.registers.values);
        const url = 'http://kb.buyercamp.com/apir/user/register';
        postRequest(url,data).then(res => {
            if (res.status == 200){
                this.props.registersactions.registstatussuccess('success')
            }
        }).catch(error => {
            if (error.response){
                // console.log(error.response);
                if (error.response.status == 406){
                    // console.log(error.response.data.errorMsg);
                    this.props.registersactions.registstatusfield(error.response.data.errorMsg);
                }else {
                    this.props.registersactions.registstatusother(error.response.data.errorMsg)
                }
            }else {
                // console.log('error',error.message)
            }
        })
    };
    handleOnchange = () => {
        // console.log(this.props);
        // console.log(this.props.registers.values)
    };
    render(){
        const {submitting} = this.props;
        return(
            <div className='loginform'>
                <form onSubmit={this.handleSubmit} className='contactusform'>
                    <Field onChange={this.handleOnchange} name="email" type="email" component={rederField} label="email"/>
                    <Field onChange={this.handleOnchange} name="password" type="password" component={rederField} label="password"/>
                    <button type="button" className="btn btn-success" disabled={submitting} onClick={this.handleSubmit}>Regist</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'register',
    validate
})(Registerui)