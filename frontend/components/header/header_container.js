import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
      console.log("hello")
      dispatch(logout())
    }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);