import { connect } from 'react-redux';
import { updateTask, destroyTask } from '../../actions/task_actions';
import TaskDetail from './task_detail';


const mapStateToProps = ({ task }) => {
  return ({
  task: task.task,
  errors: task.errors
});
}

const mapDispatchToProps = (dispatch) => ({
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: id => dispatch(destroyTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);