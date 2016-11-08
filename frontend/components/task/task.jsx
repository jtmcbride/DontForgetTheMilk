import React from 'react';
import { Link, withRouter } from 'react-router'

const Task = ({task, currentTask, router}) => {

	let path, active;
	if (currentTask) {
		active = "active";
	}
	const listId = router.params.id;
	
	if (listId) {
		path = `/app/list/${listId}/task/${task.id}`
	} else {
		path = `${router.location.pathname}/task/${task.id}`
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