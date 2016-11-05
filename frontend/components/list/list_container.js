import { connect } from 'react-redux';
import { fetchLists } from '../../actions/list_actions';
import { createTask } from '../../actions/task_actions';
import List from './list';


const mapStateToProps = ({ list, task }) => ({
  list: list.list,
  tasks: task.tasks,
  currentTask: task.task,
  errors: list.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: () => dispatch(fetchLists()),
  submitTask: (task, listId) => dispatch(createTask(task, listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);