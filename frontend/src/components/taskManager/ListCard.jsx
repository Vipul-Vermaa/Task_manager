import './listcard.scss';
import { BiChevronLeft, BiChevronRight, BiTrash } from 'react-icons/bi';
import { arrowClick, deleteItem } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';

const ListCard = (items) => {
	const { item } = items;

	const dispatch = useDispatch();

	const ArrowClick = (string) => {
		dispatch(arrowClick(item, string));
		console.log('clicked')
	};
	const handleDelete = () => {
		dispatch(deleteItem(item._id));
	};

	return (
		<div className='list-card'>
			<ul className={` ${item.status === 'done' ? 'completed menu' : 'menu'}`}>
				<li>
					<p>{item.task}</p>
				</li>
				<li>
					<p>{item.status}</p>
				</li>
				<li>
					<button className='btnclick'
						disabled={item.status === 'not completed'}
						onClick={() => ArrowClick('left')}
					>
						<BiChevronLeft />
					</button>
					<button className='btnclick'
						disabled={item.status === 'completed'}
						onClick={() => ArrowClick('right')}
					>
						<BiChevronRight />
					</button>
					<button onClick={handleDelete}>
						<BiTrash />
					</button>
				</li>
			</ul>
		</div>
	);
}; 

export default ListCard;