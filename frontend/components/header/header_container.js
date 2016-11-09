import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchSearchTasks } from '../../actions/task_actions';
import Header from './header';


const mapStateToProps = (state) => ({
  user: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    search: (query) => dispatch(fetchSearchTasks(query))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);