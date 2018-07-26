import React, { Component } from 'react';
const a=require("../img/1.jpg");
export default class Tools extends Component{
    render(){
        const {data,mulflag}=this.props
        return(
            <div className="item-wrap">
                <div className="item-left"> 
                    {mulflag?<input type='checkbox'  onChange={this.changeDeleteItem}/>:''}
                    <img src={data.img} alt="小年糕" className="item-img"/>
                    <ul className="item-message">
                        <li className="h1">{data.title}</li>
                        <li className="description">{data.description}</li>
                    </ul>
                </div>
                <div className="item-right">
                {data.time}
                <button className="moreBtn" onClick={this.showChangeDialog}>更多</button>
                </div>
            </div>
        )
    }
    changeDeleteItem=(e)=>{
        const{actions,itemIndex}=this.props
        console.log(itemIndex)
        if(e.target.checked)
        {
            actions.pushDeleteItem(itemIndex)
        }
        else{
            actions.spliceDeleteItem(itemIndex)
        }
    }

    showChangeDialog=()=>{
        const{actions,itemIndex}=this.props
        actions.putCurrrentIndex(itemIndex)
        actions.showChangeDialog()
    }
}


