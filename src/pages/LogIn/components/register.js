import React from 'react'
import {connect} from 'react-redux'
import {fpostRequest, postRequest} from "../../../common/fetch/requests";
import querystring from 'querystring'
import registaction from '../actions/registaction'
import Registerui from './registerui'
import {bindActionCreators} from 'redux'
import Configbutton from './configbutton'
class Register extends React.Component{

    render(){
        const {submitting} = this.props;
        // console.log(this.props.registstatus.status);
        if (this.props.registstatus.status == ''){
            return(
                <div>
                    <p>注册</p>
                    <Registerui registers={this.props.register} registersactions={this.props.registaction}/>
                </div>
            )
        }else if (this.props.registstatus.status == 'success'){
            return(
                <div>
                    <p>注册成功</p>
                    <Configbutton/>
                </div>
            )
        }else if(this.props.registstatus.status == 'field'){
            return(
                <div>
                    <p>注册失败</p>
                    <p>{this.props.registstatus.data}</p>
                    <Configbutton/>
                </div>
            )
        }else if(this.props.registstatus.status == 'other'){
            return(
                <div>
                    <p>{this.props.registstatus.data}</p>
                    <Configbutton/>
                </div>
            )
        }else if (this.props.registstatus.status == 'regidtting'){
            return(
                <div>
                    <p>正在注册</p>
                </div>
            )
        }else {
            return(
                <div>
                    <p>注册</p>
                    <Registerui registers={this.props.register} registersactions={this.props.registaction}/>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        register:state.form.register,
        registstatus:state.registstatusreducer
    }
};
const mapDispatchToState = dispatch => {
    return{
        registaction:bindActionCreators(registaction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Register);