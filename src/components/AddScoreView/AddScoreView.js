import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddScoreView.css';

export default class AddScoreView extends Component {
  static defaultProps = {
    addScore: 0
  };
  static propTypes = {
    addScore: PropTypes.number
  }
  constructor() {
    super();
    this.state = {
      className: 'addScore'
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.addScore != 0) {
      if (this.state.className == 'addScoreActive1') {
        this.setState({ className: 'addScoreActive2' });
      } else {
        this.setState({ className: 'addScoreActive1' });
      }
    } else {
      this.setState({ className: 'addScore' });
    }
  }
  render() {
    const { addScore } = this.props;
    return (
      <div className={this.state.className}>
        +{addScore}
      </div>
    );
  }
}

