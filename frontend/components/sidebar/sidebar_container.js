import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import SidebarNav from './nav';


const mapStateToProps = ({ list }) => ({
  lists: list.lists,
  errors: list.errors
});

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(createList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNav);