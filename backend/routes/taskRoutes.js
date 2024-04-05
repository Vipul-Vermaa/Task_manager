import express from 'express'
import { addTask, deleteTask, getAllTasks, statusChange } from '../controllers/taskController.js';
const router = express.Router();


router.route('/add').post(addTask);
router.route('/tasks').get(getAllTasks);
router.route('/:id')
	.put(statusChange)
	.delete(deleteTask);

export default router