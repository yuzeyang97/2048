import React, { Component } from 'react';
import ContentForm from './contentForm/contentForm.js';
import ContentTabbar from './contentTabBtn/contentTabBtn';


function callback(key) {
    console.log(key);
}

export default class ContentTab extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { onlineCourse, CourseTitle, historyCourse }=this.props
        return (
            <div>   
                <ContentTabbar />
                <ContentForm 
                onlineCourse={onlineCourse}
                CourseTitle={CourseTitle}
                historyCourse={historyCourse}/>
            </div>
        );
    }
}
