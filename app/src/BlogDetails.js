import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const url = 'http://localhost:8000/blogs/';
	const { data: blog, error, isFetching } = useFetch(url + id);
	return (
		<div className="blog-details">
			{/* While loading the blog from the server */}
			{isFetching && (
				<div className="loading" style={{ color: '#714d00' }}>
					<h1>Loading...</h1>
				</div>
			)}
			{/* If there is some kind of error */}
			{error && (
				<div className="error" style={{ color: '#714d00' }}>
					{error.message}
				</div>
			)}
			{/* Blog itself */}
			{blog && (
				<article>
					<h1>{blog.title}</h1>
					<h2>{blog.body}</h2>
					<h3>Written by {blog.author}</h3>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
