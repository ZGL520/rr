'use strict'

import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.username){
    errors.username = 'required'
  }else if(values.username.length > 15){
    errors.username = '必须少于或等于15个字符'
  }

  if (!values.email){
    errors.email = 'required'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = '必须是邮箱地址'
  }

  if(!values.age){
    errors.email = 'required'
  }else if (isNaN(Number(values.age))){
    errors.age = '必须是数字'
  }else if(Number(values.age)){
    errors.age = '对不起，你还未成年'
  }

  return errors

}

const warn = values => {
  const warnings = {}
  if(values.age < 19 ){
    warnings.age = 'too young too simple'
  }
  return warnings
}

class renderField extends Component{
  render(){
    let {input,label,type,meta:{touched,error,warning}}=this.props;
    return(
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder="label"  type={type} />
          {touched && ((error && < span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  }
}

class ContactUsform extends Component{
  render(){
    const {handleSubmit,pristine,reset,submitting} = props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} label = "Username"/>
        <Field name="email" type="email" component={renderField} label = "Email"/>
        <Field name="age" type="number" component={renderField} label = "Age"/>
        <div>
          <button type="submit" disabled={submitting}>提交</button>
          <button type="button" disabled={pristine || submitting } onclick={reset}>清除</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form:'ContactUsform',
  validate,
  warn
})(ContactUsform)






















