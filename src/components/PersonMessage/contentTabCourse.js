import React, { Component } from 'react';
import ContentFormCourse from './contentFormCourse/contentFormCourse.js';
import ContentTabbar from './contentTabBtn/contentTabBtn';
import Popover from '../Popover/Popover.js'

export default class ContentTab extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { LessonInfo, CourseTitle,Actions,popover,router }=this.props
        console.log(router)
        return (
            <div>   
                <ContentTabbar router={router}/>
                <Popover popover={popover}/>
                <ContentFormCourse
                 Actions={Actions}
                 LessonInfo={LessonInfo}
                CourseTitle={CourseTitle}
                />
            </div>
        );
    }
}
