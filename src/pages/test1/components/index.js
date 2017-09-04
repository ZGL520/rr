import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Logind extends React.Component{
    constructor (props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div>
                <h1>展示组件</h1>
            </div>
        )
    }
}

export default Logind;