import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import JavaScriptInjection from './JavaScriptInjection';



const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JavaScriptInjection);