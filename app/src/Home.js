import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
	const dbAdress = 'http://localhost:8000/blogs';
	const { data: blogs, isFetching, Error: error } = useFetch(dbAdress);

	// const [blogs, setBlogs] = useState(null);

	// const [isFetching, setIsFetching] = useState(true);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	setIsFetching(true);
	// 	fetch(dbAdress)
	// 		.then((responce) => {
	// 			if (!responce.ok) {
	// 				throw Error('Could not fetch blogs from database');
	// 			}
	// 			return responce.json();
	// 		})
	// 		.then((data) => {
	// 			setBlogs(data);
	// 			setIsFetching(false);
	// 			setError(null);
	// 		})
	// 		.catch((err) => {
	// 			setError(err);
	// 			console.log(err.message);
	// 			setIsFetching(false);
	// 		});
	// }, []);

	useFetch(dbAdress);

	return (
		<div className="home">
			<div className="previews">
				{error && (
					<div className="error">
						<h1>{error.message}</h1>
					</div>
				)}
				{isFetching && (
					<div className="fetching-container" style={{ textAlign: 'center' }}>
						<h1>Loading latest Blogs</h1>
					</div>
				)}
				{blogs && <BlogList blogs={blogs} />}
			</div>
		</div>
	);
};

export default Home;
