import React, { Component } from 'react';
import Swiper from '../Swiper/Swiper.js'
import HomeworkInfo from '../HomeworkInfo/HomeworkInfo.js'
import ReviewHomework from '../ReviewHomework/ReviewHomework.js'
import ReviewList from '../ReviewList/ReviewList.js'
import './homeworkcontent.css'
export default class HomeworkContent extends Component{
    
    render(){
        const { entities,item,idex,belong,Actions} = this.props
        return(
            <div className="homeworkcontent-wrapper">
                <div className="homeworkcontent-left">
                    <Swiper entities={entities} item={item} />
                    <HomeworkInfo entities={entities}  item={item} Actions={Actions}/>
                    <ReviewHomework entities={entities}  item={item} idex={idex} belong={belong} Actions={Actions}/>
                </div>
                <div className="homeworkcontent-right"> 
                    <ReviewList entities={entities}  item={item} Actions={Actions}/>
                </div>
            </div>
        )
    }
}