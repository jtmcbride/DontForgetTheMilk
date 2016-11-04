import { connect } from 'react-redux';
import { createList, destroyList } from '../../actions/list_actions';
import SidebarNav from './nav';


const mapStateToProps = ({ list }) => ({
  lists: list.lists,
  errors: list.errors
});

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(createList(list)),
  destroyList: listId => dispatch(destroyList(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNav);