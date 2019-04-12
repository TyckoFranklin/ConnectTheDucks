import React, { Component } from 'react';
import styles from './MenuCSS';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = () => {
        const { dispatch_Update_APP_VISIBILITY } = this.props;
        dispatch_Update_APP_VISIBILITY("menu", false);
    }

    render() {
        return (
            <div className="menu" style={styles.menuStyle} >
                <div className="menu-header" style={styles.header}>
                    <div className="menu-title" style={styles.headerTitle} >Connect The Ducks Menu</div>
                    <div className="menu-title" style={styles.headerX} onClick={this.handleClick}>X</div>
                </div>
            </div>
        );
    }
}