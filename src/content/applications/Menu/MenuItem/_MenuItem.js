import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import MenuItem from './MenuItem';
import { dispatch_Update_APP_VISIBILITY } from '../../../store/actionCreators';



const mapStateToProps = (state) => {
    return {  };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);