import { Link } from 'react-router-dom';
import logo from './images/logo.png';
const BlogList = (props) => {
	const blogs = props.blogs;
	return (
		<div className="blog-list">
			{blogs.map((blog) => (
				<>
					<div className="single-blog-preview">
						<div className="blog-preview-text" key={blog.id}>
							<Link to={`/blogs/${blog.id}`}>
								<h1>{blog.title}</h1>
								<p>Author: {blog.author}</p>
							</Link>
						</div>
						<div className="blog-preview-side-image">
							<img src={logo} alt="" srcset="" />
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default BlogList;
