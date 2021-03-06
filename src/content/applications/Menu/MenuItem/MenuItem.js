import React, { Component } from 'react';
import styles from './MenuItemCSS';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { components, clickCallback } = this.props;
        return (
            <div className="menu-item" style={styles.menuItemStyle} onClick={clickCallback}>
                {components}
            </div>
        );
    }
}