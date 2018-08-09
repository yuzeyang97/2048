import React from 'react';
import PropTypes from 'prop-types';
import './Dialog.css';

export default class Dialog extends React.Component {
    static defaultProps = {
        type: '',
        isActive: false,
        title: '',
        renderBody:()=>{
            return (<div>这里是事例</div>)
        },
        okText:'确定',
        cancelText:'取消',
        onOk: () => {alert('点击确定')},
        onCancel: () => {},
    };

    static propTypes = {
        type:PropTypes.string,
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string,
        renderBody: PropTypes.func.isRequired,
        okText:PropTypes.string,
        cancelText:PropTypes.string,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
    }

    getDialogClassName = () => {
        if (!this.props.isActive) {
            return 'hide';
        }
        return 'show';
    }
    getBodyClassName = () => {
        if (this.props.type == 'iOS')
            return 'showBody-ios';
        else
            return 'showBody-android'
    }
    render() {
        const { title, menus, type } = this.props;
        return (
            <div className={this.getDialogClassName()}>
                <div className='mask' onClick={this.props.onCancel} />
                <div className={this.getBodyClassName()}>
                    {title.length? <div className="dialog-title">{title}</div> : null}
                    <div className='dialog-body'>
                    {
                       this.props.renderBody?this.props.renderBody():''
                    }
                    </div>
                    <div className='btnWrap'>
                         <div className="btn-cancel" onClick={this.props.onCancel}>{this.props.cancelText}</div>
                         <div className="btn-ok" onClick={this.props.onOk}>{this.props.okText}</div>
                    </div>
                </div>
            </div>
        );
    }
}