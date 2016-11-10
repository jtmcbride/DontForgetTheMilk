import { connect } from 'react-redux';
import { createList, destroyList, updateList, clearErrors } from '../../actions/list_actions';
import SidebarNav from './nav';


const mapStateToProps = ({ list, router }) => ({
  lists: list.lists,
  currentListId: list.list.id,
  errors: list.errors,
  router
});

const mapDispatchToProps = (dispatch) => ({
  createList: list => dispatch(createList(list)),
  destroyList: listId => dispatch(destroyList(listId)),
  updateList: list => dispatch(updateList(list)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNav);