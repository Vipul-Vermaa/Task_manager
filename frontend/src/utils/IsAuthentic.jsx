import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const IsAuthentic = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.auth);
	const location = useLocation();
    const navigate=useNavigate()

	if (!isLoggedIn.currentUser) {
		return <Navigate to='/login' state={{ from: location }} />;
	}
	return children;
};

export default IsAuthentic;

