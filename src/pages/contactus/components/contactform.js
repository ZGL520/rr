import React,{Component} from 'react'
import { Field, reduxForm } from 'redux-form'
//定义校验的方法
const validate = values => {
  const errors = {}
  if (!values.firstname) {
    errors.firstname = '请输入名字'
  } else if (values.firstname.length > 15) {
    errors.firstname = '必须小于等于15个字符'
  }
  if (!values.surname) {
    errors.surname = '请输入名字'
  } else if (values.surname.length > 15) {
    errors.surname = '必须小于等于15个字符'
  }
  if (!values.email) {
    errors.email = '请输入邮箱地址'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '请检查邮箱地址格式'
  }

  if(!values.phone){
    errors.phone = '请输入电话'
  }else if(isNaN(Number(values.phone))){
    errors.phone = '必须是数字'
  }

  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }
  return errors
}
//定义另外一个校验的方法
// const warn = values => {
//   const warnings = {}
//   if (values.age < 19) {
//     warnings.age = 'Hmm, you seem a bit young...'
//   }
//   return warnings
// }

class renderField extends Component{
  render(){
    let { input, label, type, meta: { touched, error, warning } } = this.props;
    return(
      <div className="form-group">
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} className="form-control"/>
          {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-danger">{warning}</span>))}
        </div>
      </div>
    )
  }
}
class ContactForm extends Component{
  style = {
    margin:'10px',
  }
  render(){
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Send us a Message</h2>
        </div>
        <Field name="firstname" type="text" component={renderField} label="firstname"/>
        <Field name="surname" type="text" component={renderField} label="surname"/>
        <Field name="phone" type="number" component={renderField} label="phone"/>
        <Field name="email" type="email" component={renderField} label="email"/>

        <div>
          <p>Manufactured and Packed for:</p>
          <p>KANABELLE DAIRY PTY LTD.</p>
          <p>Customer Careline: AU: 1300032761</p>
        </div>
        <div>
          <p>Where did you hear about us ?</p>
        </div>
        <Field name="wherehere" type="textarea" component={renderField} label="wherehere"/>

        <div>
          <p>What is your question ?</p>
        </div>
        <Field name="question" type="textarea" component={renderField} label="question"/>
        <div>
          <button type="submit" className="btn btn-success" disabled={submitting} style={{marginRight:'20px'}}>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  validate
})(ContactForm)

