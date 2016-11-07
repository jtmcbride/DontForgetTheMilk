import React from 'react';
import { Link, withRouter } from 'react-router'

const Task = ({task, router}) => {
	console.log(router)

	const listId = router.params.id;
	return (
		<div>
			<Link to={`app/list/${listId}/task/${task.id}`} >{task.name}</Link>
		</div>
		);
};

export default withRouter(Task);