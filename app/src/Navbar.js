import logo from './images/logo.png';

const Navbar = () => {
	return (
		<nav className="navbar">
			<img src={logo} alt="Fern's blog" />
			<h1>Fern's blog</h1>
			<div className="links">
				<a href="/">Home</a>
				<a href="/create">Post</a>
			</div>
		</nav>
	);
};

export default Navbar;
