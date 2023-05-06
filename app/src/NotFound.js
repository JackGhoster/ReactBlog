import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>This page does not exist!</h1>
			<Link to="/">Return to the list of blogs</Link>
		</div>
	);
};

export default NotFound;
