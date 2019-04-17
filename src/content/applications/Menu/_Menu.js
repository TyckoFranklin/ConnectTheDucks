import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Menu from './Menu';
import { dispatch_Update_APP_VISIBILITY } from '../../store/actionCreators';



const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ dispatch_Update_APP_VISIBILITY }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);