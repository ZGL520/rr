import React from 'react'
import {getRequest} from "../../../common/fetch/requests";

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goods:[]
        }
    }
    componentWillMount(){
        const url = 'http://lara.brolgatech.com/api/goods/list';
        getRequest(url).then(res => {
            this.setState({goods:res.data.data});
            console.log(this.state.goods);
            // console.log(this.state.goods.entries())
            // for (let key of this.state.goods.entries()){
            //     console.log(key)
            // }
        })


    }


    render(){
        let item = [];
        for (let key of this.state.goods.entries()){
            item.push(
                <div>
                    <p>{key[1].title_cn}</p>
                    <p>{key[1].product_price}</p>
                </div>
            )
        }
        return(
            <div>
                {item}
            </div>
        )
    }
}

export default Cart;