import React, { Component } from 'react';
import styles from './JavaScriptInjectionCSS';
import * as Ids from '../../../shared/constants/applicationIds';
import JavaScriptInjectionItem from './JavaScriptInjectionItem/JavaScriptInjectionItem';
import * as Fns from './functions/functions';

export default class JavaScriptInjection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { closeApp, showMenu } = this.props;
        return (
            <div className="javascript-injection" style={styles.javaScriptInjectionStyle} >
                <div className="javascript-injection-header" style={styles.header}>
                    <div className="javascript-injection-title" style={styles.headerTitle} >JavaScript Injection Menu</div>
                    <div className="javascript-injection-title" style={styles.headerX} onClick={closeApp}>X</div>
                    <div className="javascript-injection-title" style={styles.headerX} onClick={showMenu}>Main Menu</div>
                </div>
                <div className="javascript-injection-item-container" style={styles.javaScriptInjectionItemContainer}>
                    <JavaScriptInjectionItem
                        clickCallback={Fns.showAlert}
                        components={(
                            <div className="javascript-injection-option" style={styles.javaScriptInjectionOption} >
                                A
                            </div>
                        )}
                    />
                    <JavaScriptInjectionItem components={(<div className="javascript-injection-option" style={styles.javaScriptInjectionOption} >B</div>)} />
                    <JavaScriptInjectionItem components={(<div className="javascript-injection-option" style={styles.javaScriptInjectionOption} >C</div>)} />
                </div>
            </div>
        );
    }
}