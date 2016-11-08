import React from 'react';
import { Link, withRouter } from 'react-router'

const Task = ({task, currentTask, router}) => {

	let path, active;
	if (currentTask) {
		active = "active";
	}
	const listId = router.params.id;
	const listTime = router.params.time
	console.log(router.params)
	
	if (listId) {
		path = `/app/list/${listId}/task/${task.id}`
	} else {
		path = `app/${listTime}/task/${task.id}`
	}
	return (
		<Link to={path} className={`task ${active}`}>
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