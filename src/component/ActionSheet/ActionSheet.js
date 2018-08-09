import React from 'react';
import PropTypes from 'prop-types';
import './actionSheet.css';

export default class ActionSheet extends React.Component {
    static defaultProps = {
        isActive: false,
        title: '',
        menus: [],
        onCancel: () => { },
        type: ''
    };

    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string,
        menus: PropTypes.array.isRequired,
        onCancel: PropTypes.func.isRequired,
    }

    getSheetClassName = () => {
        if (!this.props.isActive) {
            return 'hide';
        }
        return 'show';
    }
    getMenuClassName = () => {
        if (this.props.type == 'iOS')
            return 'showMenu-ios';
        else
            return 'showMenu-android'
    }

    handleMenuItemClick = idx => {
        const { menus, onCancel } = this.props;
        menus[idx].click && menus[idx].click(idx);
        onCancel();
    }

    render() {
        const { title, menus, type } = this.props;
        return (
            <div className={this.getSheetClassName()}>
                <div className='mask' onClick={this.props.onCancel} />
                <div className={this.getMenuClassName()}>
                    {(type == 'iOS' && title.length) ? <div className="title divider">{title}</div> : null}

                    {
                        menus.map((item, idx) => (
                            <div
                                className="btn divider"
                                key={`actionSheet_${idx}`}
                                onClick={() => this.handleMenuItemClick(idx)}
                            >
                                {item.title}
                            </div>
                        ))
                    }
                    {
                        (type == 'iOS')
                            ? <div className="btn cancel" onClick={this.props.onCancel}>取消</div>
                            : null
                    }
                </div>
            </div>
        );
    }
}