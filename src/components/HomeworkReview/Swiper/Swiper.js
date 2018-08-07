import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './Swiper.css'


export default class SwiperWrap extends Component {
    componentDidMount() {
        new Swiper(this.swiperID, {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            observer: true,
            autoplay:true
        });
    }
    render() {
        const { entities,item} = this.props
        console.log(entities)
        return (
            <div className="wxchat-banner">
                <section className="new_custom swiper-container index_tab_con" ref={self => this.swiperID = self}>
                    <div className="swiper-wrapper">
                    {entities.homework[item].photos.map((item)=>{
                        console.log(item)
                        return  <div className="swiper-slide"><img className='swiper-img'src={item}/></div>
                    })}
                    </div>
                    
                    <div className="swiper-button-prev" ></div>
                    <div className="swiper-button-next" ></div>
                </section>
            </div>
        )
    }
}