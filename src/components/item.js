import React, { Component } from 'react';
import ColorBtn from './colorBtn'
export default class Item extends Component {

    render() {
        const { title, btnList, type } = this.props.data
        return (
            <div className="item">
                <span className='itemTitle'>{title}</span>
                {btnList.map((item, idex) => {
                    return <ColorBtn
                        bgColor={item}
                        type={type}
                        currentIdex={idex}
                        itemIdex={this.props.currentIdex}
                        topItem={this.props.topItem} />
                })}
            </div>
        )
    }
}