import React, { Component } from 'react';
import ContentFormSatisfiled from './contentFormSatisfiled/contentFormSatisfiled.js';
import ContentTabbar from './contentTabBtn/contentTabBtn';
import Popover from '../Popover/Popover.js'

function callback(key) {
    console.log(key);
}

export default class ContentTab extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { satisFiledList , Actions,popover}=this.props
        return (
            <div>   
                <ContentTabbar />
                <Popover popover={popover}/>
                <ContentFormSatisfiled satisFiledList={satisFiledList}   Actions={Actions}/>
            </div>
        );
    }
}
