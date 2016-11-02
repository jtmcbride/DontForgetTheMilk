import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './login_form';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);