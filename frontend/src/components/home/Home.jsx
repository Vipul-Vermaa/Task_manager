import './home.scss';
import myImage from '../../assets/transparent.gif'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
const Home = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	return (
		
		<><Header/>
		<div className='home'>
			
			<div className='home__container'>
				<div className="container_inside">
				<h2>Organize it all</h2>
				<p>With TaskManager</p>
					<Link to='/register' className='button'>
						Get Started
					</Link>
				</div>
			</div>
			<div className="img">
				<div className="img_inside">
				<img src={myImage} />
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
