import React from 'react'
import {Field,reduxForm} from 'redux-form'

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
class LoginUiform extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            password:''
        };
    }

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

    componentWillMount(){
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.testlogin.values)
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={this.style}>
                    <div>
                        <p>登录</p>
                    </div>
                    <Field name="name" component={inputField}/>
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
