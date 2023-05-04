import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from './images/logo.png';

const Navbar = () => {
	return (
		<nav className="navbar">
			<img src={logo} alt="Fern's blog" />
			<h1>Fern's blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">Post</Link>
			</div>
		</nav>
	);
};

export default Navbar;
