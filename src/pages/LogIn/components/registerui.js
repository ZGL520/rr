import React from 'react'
import {Field,reduxForm} from 'redux-form'

const validate = values => {
    const errors = {};
    if (!values.registemail){
        errors.registemail = '请输入邮箱'
    }

    if (!values.registpassword){
        errors.registpassword = '请输入密码';
    }else if (values.registpassword.length < 6 ){
        errors.registpassword = '请输入六位及以上密码'
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
    handleSubmit = () => {
        e.preventDefault();
        console.log('123')
    };
    render(){
        return(
            <div className='loginform'>
                <form onSubmit={this.handleSubmit} className='contactusform'>
                    <Field name="registemail" type="email" component={rederField} label="email"/>
                    <Field name="registpassword" type="password" component={rederField} label="password"/>
                    <button type="submit">regist</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'register',
    validate
})(Registerui)