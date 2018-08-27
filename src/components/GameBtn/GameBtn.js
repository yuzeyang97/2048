import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameBtn.css';

export default class GameBtn extends Component {
  static defaultProps = {
    val: 0
  };
   static propTypes = {
     val: PropTypes.number
   }
   constructor() {
     super();
     this.state = {
       className: ''
     };
   }
   componentWillReceiveProps(nextProps) {
     if (
       (nextProps.val % this.props.val == 0 && nextProps.val != 0 && nextProps.val != this.props.val) ||
      (nextProps.newBtn ? (nextProps.row == nextProps.newBtn[0] && nextProps.col == nextProps.newBtn[1]) : false)
     ) {
       this.setState({ ...nextProps, className: `${nextProps.className} active` });
     } else {
       this.setState({ ...nextProps, className: nextProps.className });
     }
   }
   render() {
     const { val } = this.props;
     return (
       <div className={this.state.className}> {val} </div>
     );
   }
}
