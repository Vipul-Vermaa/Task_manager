import { useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const [task, setTask] = useState('');

	const handleChange = (e) => {
		setTask(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(task,));
			 setTask('')
	};

	return (
		<div>
			<div className='addtask'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='task'
						placeholder='Enter your Task'
						onChange={handleChange}
						value={task}
					/>
					<button className='my-button'>Add Task</button>
				</form>
			</div>
		</div>
	);
};

export default AddTask;