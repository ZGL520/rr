import React from 'react'

class Customercentre extends React.Component{
    render(){

        const hnd = () => {
            console.log('asdfasf')
        };

        return(
            <div>
                <h2 onClick={hnd}>这里是个人中心</h2>
            </div>
        )
    }
}


export default Customercentre;