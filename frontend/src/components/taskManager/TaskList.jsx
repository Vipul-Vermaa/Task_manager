import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice.js';
import ListCard from './ListCard.jsx';
import './tasklist.scss';

const TaskList = () => {
	const auth = useSelector((state) => state.auth);
	const tasks = useSelector((state) => state.task);

	const { currentUser } = auth;
	const { AllTasks } = tasks;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTasks());
	}, [dispatch]);

	return (
		<div className="task-list-container">
			<ul className='list-header'>
				<li>
					<h5>Task Name</h5>
				</li>
				<li>
					<h5>Status</h5>
				</li>
				<li>
					<h5>Action</h5>
				</li>
			</ul>
			{Object.values(AllTasks).map((item) => {
				return <ListCard key={item._id} item={item} />;
			})}
		</div>
	);
};

export default TaskList;
