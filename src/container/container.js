import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header/Header.js'
import Slider from '../components/Slider/Slider.js'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.js'
import PersonMessage from '../components/PersonMessage/index.js'
import StudentMessage from '../components/StudentMessage/index.js'
import ClassInfo from '../components/ClassInfo/index.js'
import { BrowserRouter, Route } from 'react-router-dom'




export default class Container extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Slider />
          <Layout>
          <BrowserRouter>
            <div>
              <Breadcrumb />
              <Route path="/users"  component={PersonMessage} />
              <Route path="/class" component={ClassInfo}/>
              <Route path="/" component={StudentMessage}/>
            </div>
          </BrowserRouter>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


