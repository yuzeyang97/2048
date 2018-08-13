import React, { Component } from 'react';
import Search from '../../search/search.js'
import './HomeworkHeader.css'

export default class HomeworkHeader extends Component{
    render(){
        const {Actions}=this.props
        return(
            <div className="homeworkheader-wrapper">
                <div className="homeworkheader-user">周围</div>
                <Search search={Actions.searchHomework}/>
            </div>
        )
    }
}