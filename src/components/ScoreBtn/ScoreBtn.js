import React, { Component } from 'react';
import './ScoreBtn.css'
export default class ScoreBtn extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    const {score,title} = this.props;
        return (
            <div className='scorebtn'>
                <div className='scorebtn-title'>
                    {title}
                </div>
                <div className='scorebtn-score'>
                    {score}
                </div>
            </div>
        );
    }
}
