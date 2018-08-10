import React from 'react';
import PropTypes from 'prop-types';
import './switch.css';

export default class Switch extends React.Component {
    static defaultProps = {
        checked:true,
        onChange: () => { alert('转换') },
    };

    static propTypes = {
        checked: PropTypes.bool.isRequired,
        onChange: PropTypes.func,
    }
    getClass(){
        if(this.props.checked){
            return 'switch-checked'
        }
        else
        return 'switch-unchecked'
    }
    render() {
        return (
                    <input className={this.getClass()} type="checkbox" onChange={this.props.onChange} checked={this.props.checked}/>
        );
    }
}