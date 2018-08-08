import React, { Component } from 'react';

export default class HomeworkTab extends Component{
    render(){
        const {entities,homework,belong}=this.props;
        console.log(entities)
        console.log(homework)
        console.log(belong)
        return(
            <div className="homeworktab">
                <div className="homeworktab-title">
                {this.props.title}
                {belong=='allUnreview'||belong=='currentUnreview'?
                <span className="homeworktab-unreview">{homework[belong].length}</span>:''}
                </div>
                {belong=='allReview'||belong=='currentReview'?
                <div className="homeworktab-review">总数为:{homework[belong].length}</div>:''}
            </div>
        )
    }
}
