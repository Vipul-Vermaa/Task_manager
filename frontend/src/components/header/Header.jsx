import './Header.scss';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className='header'>
				<div className='header__logo'>
					<h5>TASK MANAGER</h5>
				</div>
				<div className='header__buttons'>					
							<Link to='/login' className='button'>
								Login
							</Link>
							<Link to='/register' className='button'>
								Register
							</Link>						
				</div>
			</nav>
		</div>
	);
};

export default Header;