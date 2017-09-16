import React from 'react';
import { NavBar,Icon } from 'antd-mobile';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom';
import barstatus from "../actions/navbaraction";

// 引入侧边导航栏
// import Bar from './bar'

//引入antd导航栏
import Barantd from './barantd'

class HeaderComponent extends React.Component {


    handlebarshow = (e) => {
        e.preventDefault();
        this.props.barstatusaction.navbarshow()
    };

    render() {
        return (
            <div>
                <NavBar leftContent={<Link className='fontWhite icon-home2' to='/' onClick={this.handlebarshow}></Link>}
                         rightContent={[
                             <Link className='fontWhite' key='1' to={this.props.rightLink}>{this.props.rightLinkContent}</Link>
                         ]}
                >{this.props.title}
                </NavBar>
                <Barantd title='home' rightLink='/login' rightLinkContent='登录/注册'/>
            </div>
        )
    }
}

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
    rightLink:PropTypes.string.isRequired,
    rightLinkContent:PropTypes.string.isRequired
}



function mapStateToProps(state) {
    return {
        barstatu : state.navbarreducer
    }
}
const mapDispatchToProps = dispatch => {
    return{
        barstatusaction:bindActionCreators(barstatus,dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);