import React, { Component } from 'react';
import styles from './MenuCSS';
import * as Ids from '../../../shared/constants/applicationIds';
import MenuItem from './MenuItem/_MenuItem';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = () => {
        const { dispatch_Update_APP_VISIBILITY } = this.props;
        dispatch_Update_APP_VISIBILITY(Ids.MENU, false);
    }

    render() {
        return (
            <div className="menu" style={styles.menuStyle} >
                <div className="menu-header" style={styles.header}>
                    <div className="menu-title" style={styles.headerTitle} >Connect The Ducks Menu</div>
                    <div className="menu-title" style={styles.headerX} onClick={this.handleClick}>X</div>
                </div>
                <div className="menu-item-container" style={styles.menuItemContainer}>
                    <MenuItem components={(<div className="menu-option" style={styles.menuOption} >A</div>)}/>
                    <MenuItem components={(<div className="menu-option" style={styles.menuOption} >B</div>)}/>
                    <MenuItem components={(<div className="menu-option" style={styles.menuOption} >C</div>)}/>
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </div>
        );
    }
}