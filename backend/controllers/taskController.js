import User from "../model/userModel.js";
import Task from "../model/taskModel.js";

export const addTask = async (req, res) => {
	const { task, id } = req.body;
	try {
		if (!task) return res.status(400).send('please enter the task');
		if (task.length < 2)return res.status(400).send('add minimum 2 char');
		const taskDetail = await new Task({
			task,
			createdBy: id,
		});
		await taskDetail.save();
		return res.status(200).send(taskDetail);
	} catch (error) {
		return res.status(400).send('task addition failed');
	}
};


export const getAllTasks = async (req, res) => {
	const { id } = req.query;
	try {
		let tasklist = await Task.find({ createdBy: id });
		return res.status(200).send(tasklist);
	} catch (error) {
		return res.status(400).send(error);
	}
};



export const statusChange = async (req, res) => {
	const { id, string } = req.body;
	try {
		let task = await Task.findById({ _id: id });
		if (string === 'right') {
			if (task.status === 'notcompleted') {
				task.status = 'completed';
				task.save();
				return res.send(task);
			} 
		} else {
			if (task.status === 'completed') {
				task.status = 'notcompleted';
				task.save();
				return res.send(task);
			} 
		}
	} catch (error) {}
};

export const deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
		let response = await Task.findByIdAndDelete(id);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(400).send('deleteFailed');
	}
};

