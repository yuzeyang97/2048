import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

export default class Slider extends React.Component {
    constructor(){
        super()
        this.state={
            flag:0
        }
    }
    static defaultProps = {
        defaultValue: 50,
        showValue: true,
        onChange: (k) => { console.log(k) },
    };

    static propTypes = {
        defaultValue: PropTypes.number.isRequired,
        showValue: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
    }
    handleMousedown=(e)=>{
        this.setState({
            flag:1
        })
    }
    handleTouchMousemove=(e)=>{
        if(this.state.flag==1){
            console.log(this.slideInner.offsetLeft)
            this.sliderHandler.style.left=e.changedTouches[0].pageX-this.slideInner.offsetLeft+'px';
            this.sliderTrack.style.width=e.changedTouches[0].pageX-this.slideInner.offsetLeft+'px';
            let Innerwidth=document.defaultView.getComputedStyle(this.slideInner, null)['width']
            let handlLeft= this.sliderTrack.style.width
            Innerwidth=Number(Innerwidth.replace('px',''))
            handlLeft=Number(handlLeft.replace('px',''))
            let value=Number.parseInt(handlLeft/Innerwidth*100)
            if(value==100||value==0){
                this.setState({
                    flag:0
                })
            }
            this.props.onChange(value)
        }
    }
    handleMousemove=(e)=>{
        if(this.state.flag==1){
            console.log(this.slideInner.offsetLeft)
            this.sliderHandler.style.left=e.pageX-this.slideInner.offsetLeft+'px';
            this.sliderTrack.style.width=e.pageX-this.slideInner.offsetLeft+'px';
            let Innerwidth=document.defaultView.getComputedStyle(this.slideInner, null)['width']
            let handlLeft= this.sliderTrack.style.width
            Innerwidth=Number(Innerwidth.replace('px',''))
            handlLeft=Number(handlLeft.replace('px',''))
            let value=Number.parseInt(handlLeft/Innerwidth*100)
            if(value==100||value==0){
                this.setState({
                    flag:0
                })
            }
            this.props.onChange(value)
        }
    }
    leave=()=>{
        this.setState({
            flag:0
        })
    }
    handleMouseUp=(e)=>{
        this.setState({
            flag:0
        })
    }
    render() {
        return (
            <div className="sliderWrapper" >
            <div className="slider" onMouseMove={this.handleMousemove} onTouchMove={this.handleTouchMousemove} onMouseUp={this.handleMouseUp} onMouseLeave={this.leave} onTouchEnd={this.leave}>
                <div className="sliderInner"  ref={self => this.slideInner = self}>
                    <div  ref={self => this.sliderTrack = self} style={{width: this.props.defaultValue+'%'}} className="sliderTrack"></div>
                    <div  ref={self => this.sliderHandler = self} style={{left: this.props.defaultValue+'%'}} className="sliderHandler" onMouseDown={this.handleMousedown}  onTouchStart={this.handleMousedown} ></div>
                </div>
            </div>
            {this.props.showValue?<div id="sliderValue" className="sliderWrapperValue">{this.props.defaultValue}</div>:''}
        </div>
        );
    }
}