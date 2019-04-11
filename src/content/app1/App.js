import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from 'redux'



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">This is a test of the system!</h1>
                </header>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return { CalendarData: state.CalendarData };
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ fetchJSONFirst, fetchJSONSecond }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
