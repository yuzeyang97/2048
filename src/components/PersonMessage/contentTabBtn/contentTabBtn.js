import React, { Component } from 'react';
import { Button } from 'antd';
import './contentTabBtn.css'
export default class ContentTabBtn extends Component {
    constructor(props) {
      super(props)
  
    }
    render() {
      return (
        <div className="contentTabBtn-wrap">
          <div className="contentTabBtn-List">
              <Button>汇总</Button>
              <Button id="activee">摄影课</Button>
              <Button>绘画课</Button>
          </div>
          <div>
              <Button>返回</Button>
          </div>
        </div>
      );
    }
  }