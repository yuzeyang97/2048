import React, { Component } from 'react';
import ContentFormCourse from './contentFormCourse/contentFormCourse.js';
import ContentTabbar from './contentTabBtn/contentTabBtn';
import Popover from '../Popover/Popover.js'

export default class ContentTab extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { onlineCourse, CourseTitle, historyCourse,Actions,popover }=this.props
        return (
            <div>   
                <ContentTabbar />
                <Popover popover={popover}/>
                <ContentFormCourse
                 Actions={Actions}
                onlineCourse={onlineCourse}
                CourseTitle={CourseTitle}
                historyCourse={historyCourse}/>
            </div>
        );
    }
}
