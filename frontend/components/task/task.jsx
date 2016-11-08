import React from 'react';
import { Link, withRouter } from 'react-router'

const Task = ({task, currentTask, router}) => {

	let path, active, completed;
	if (currentTask) {
		active = "active";
	}
	if (task.completed) {
		completed = "completed"
	}
	const listId = router.params.id;
	const listTime = router.params.time
	
	if (listId) {
		path = `/app/list/${listId}/task/${task.id}`
	} else if (listTime) {
		path = `app/${listTime}/task/${task.id}`
	} else {
		path = `app/all/task/${task.id}`
	}
	return (
		<Link to={path} className={`task ${active} ${completed}`}>
			<div>
				<div className={`priority priority-${task.priority}`}></div>
				<span>
					{task.name}
				</span>
			</div>
			<div className="task-due">{task.due_date}</div>
		</Link>
		);
};

export default withRouter(Task);