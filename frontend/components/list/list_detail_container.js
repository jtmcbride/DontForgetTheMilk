import { connect } from 'react-redux';
import {  } from '../../actions/list_actions';
import ListDetail from './list_detail';


const totalTaskTime = (tasks) => {
  return Object.keys(tasks).map(taskId => tasks[taskId].estimate).reduce((task1, task2) => {
    return task1 + task2;
  }, 0);
}

const overdueTasks = (tasks) => {
  let overdue = 0;
  let currentDate = new Date;
  currentDate.setHours(0,0,0,0);
  Object.keys(tasks).map(taskId => tasks[taskId].due_date).forEach(dueDate => {
    console.log(new Date(dueDate))
    if (dueDate && currentDate > new Date(dueDate).setHours(24,10,10,0)) {
      overdue++;
    }
  });
  return overdue;
}


const mapStateToProps = ({ list, task }) => ({
  list: list.list,
  numCompletedTasks: Object.keys(task.tasks.completed).length,
  numTasks: Object.keys(task.tasks.incomplete).length,
  time: totalTaskTime(task.tasks.incomplete),
  overdue: overdueTasks(task.tasks.incomplete),
  errors: list.errors
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDetail);