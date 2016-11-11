import { connect } from 'react-redux';
import { updateTask, destroyTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import TaskDetail from './task_detail';


const mapStateToProps = ({ task, list }) => {
  return ({
  task: task.task,
  errors: task.errors,
  lists: Object.keys(list.lists).map(listId => ({ id: listId, title: list.lists[listId].title }))
});
}

const mapDispatchToProps = (dispatch) => ({
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: id => dispatch(destroyTask(id)),
  updateList: id => dispatch(fetchList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);