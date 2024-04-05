import './sidebar.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';

const Sidebar = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;

	const dispatch = useDispatch();
	

	const navigate=useNavigate()
	const handleClick = (e) => {
		e.preventDefault();
		dispatch(logoutSuccess());
		localStorage.removeItem('auth');
		navigate('/')
		window.location.reload();
	};

	return (
		<div>
			<ul className='sidebar'>
				<li className='list-item'>
					<h5>{currentUser?.username || 'Guest'}</h5>
				</li>
				<li className='list-item'>
					<Link to='/taskmanager'>Task Manager</Link>
				</li>
				<li className='list-item'>
				<Link to='/login' className='button' onClick={handleClick}>
							LogOut
				</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
