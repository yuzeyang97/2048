import React, { Component } from 'react';
import Swiper from '../Swiper/Swiper.js'
import HomeworkInfo from '../HomeworkInfo/HomeworkInfo.js'
import ReviewHomework from '../ReviewHomework/ReviewHomework.js'
import ReviewList from '../ReviewList/ReviewList.js'
import './homeworkcontent.css'
export default class HomeworkContent extends Component{
    render(){
        const { entities,item} = this.props
        return(
            <div className="homeworkcontent-wrapper">
                <div className="homeworkcontent-left">
                    <Swiper entities={entities} item={item} />
                    <HomeworkInfo entities={entities}  item={item}/>
                    <ReviewHomework entities={entities}  item={item}/>
                </div>
                <div className="homeworkcontent-right"> 
                    <ReviewList entities={entities}  item={item}/>
                </div>
            </div>
        )
    }
}