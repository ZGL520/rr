import React from 'react'


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
        console.log(this.props.logininfo)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.name,'1234');
    };

    
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={this.style}>
                    <div>
                        <p>登录</p>
                    </div>
                    <input type="text" name="name" placeholder='名字' onInput={this.handleInput} is twoWay={'name'} onChange={this.onChangeText}/>
                    <input type="password" name="password" placeholder='密码'/> <br/>
                    <input type="submit" style={this.btn}/>
                </form>
                <div>
                    <p>{this.state.name}</p>
                </div>
            </div>
        )
    }
}

export default LoginUiform;
