import Sidebar from '../sidebar/Sidebar';
import AddTask from '../taskManager/AddTask';
import TaskList from '../taskManager/TaskList';
import './taskmanager.scss';

const TaskManager = () => {
	return (
		<div>
			<div className='taskmanager'>
				<div className='taskmanager__left'>
					<Sidebar />
				</div>
				<div className='taskmanager__right'>
					<div className='taskmanager__addtask'>
						<AddTask />
					</div>
					<div className='taskmanager__tasklist'>
						<TaskList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskManager;
