import React from 'react';
import PropTypes from 'prop-types';
import './progress.css';

export default class Dialog extends React.Component {
    static defaultProps = {
        value: 50,
        showCancel: true,
        onCancel: () => { alert('这是回调') },
    };

    static propTypes = {
        value: PropTypes.number.isRequired,
        showCancel: PropTypes.bool,
        onCancel: PropTypes.func,
    }
    render() {
        return (
            <div className="progress">
                <div className="progressBar">
                    <div className="progressInner" style={{ width: this.props.value + '%' }}></div>
                </div>
                {this.props.showCancel ?
                    (
                        <div className="progressCancel">
                            <div onClick={this.props.onCancel}>X</div>
                        </div>
                    ) : ''

                }
            </div>
        );
    }
}