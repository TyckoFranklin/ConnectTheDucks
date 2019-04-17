import React, { Component } from 'react';
import styles from './JavaScriptInjectionItemCSS';

export default class JavaScriptInjectionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { components, clickCallback } = this.props;
        return (
            <div className="menu-item" style={styles.javaScriptInjectionItemStyle} onClick={clickCallback}>
                {components}
            </div>
        );
    }
}