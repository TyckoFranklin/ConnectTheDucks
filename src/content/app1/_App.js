import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import App from './App';



const mapStateToProps = (state) => {
    return {  };
}

const mapDispatchToProps = (dispatch) => {
    return {};
    // return bindActionCreators({ fetchJSONFirst, fetchJSONSecond }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
