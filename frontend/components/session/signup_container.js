import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    demoLogin: user => dispatch(login(user))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);