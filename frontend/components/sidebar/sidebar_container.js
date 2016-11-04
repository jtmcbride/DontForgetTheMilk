import { connect } from 'react-redux';
import { createList, destroyList, updateList } from '../../actions/list_actions';
import SidebarNav from './nav';


const mapStateToProps = ({ list }) => ({
  lists: list.lists,
  currentListId: list.list.id,
  errors: list.errors
});

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(createList(list)),
  destroyList: listId => dispatch(destroyList(listId)),
  updateList: list => dispatch(updateList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNav);