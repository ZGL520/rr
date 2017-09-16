import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//引入组件
import barstatus from '../../Header/actions/navbaraction'

//引入样式
import('./bar.less');

//侧边导航栏
class Bar extends React.Component{
    constructor(props){
        super(props)
    }

    handlebarhide = (e) => {
        e.preventDefault();
        this.props.barstatusaction.navbarhide()
    };

    render(){
        let style = {};
        if (this.props.barstatu.status == 'show'){
            style = {
                display: 'flex',
                width: '100vw',
                height: '100vh',
                animation:'baranshow 3s 1',
            };
        }else if (this.props.barstatu.status == 'hide'){
            style = {
                display:'none'
            };

        }else {

        }

        return(
            <div className="bar" style={style}>
                    <div className="navbar" >
                        <p>导航栏</p>
                    </div>
                    <div className="navempty" onClick={this.handlebarhide}></div>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        barstatu : state.navbarreducer
    }
};
const mapDispatchToProps = dispatch => {
    return{
        barstatusaction:bindActionCreators(barstatus,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Bar)