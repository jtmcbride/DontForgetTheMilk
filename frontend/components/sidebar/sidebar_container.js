import { connect } from 'react-redux';
// import { login } from '../../actions/session_actions';
import SidebarNav from './nav';


const mapStateToProps = ({ list }) => ({
  lists: list.lists
});

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNav);