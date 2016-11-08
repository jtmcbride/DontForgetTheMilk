import { connect } from 'react-redux';
import { updateTask } from '../../actions/task_actions';
import TaskDetail from './task_detail';


const mapStateToProps = ({ task }) => {
  return ({
  task: task.task,
  errors: task.errors
});
}

const mapDispatchToProps = (dispatch) => ({
  updateTask: task => dispatch(updateTask(task))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);