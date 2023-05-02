const BlogList = (props) => {
	const blogs = props.blogs;
	return (
		<div className="blog-list">
			{blogs.map((blog) => (
				<>
					<div className="blog">
						<div className="blog-preview-text" key={blog.id}>
							<h1>{blog.title}</h1>
							<p>Author: {blog.author}</p>
						</div>
						<div className="blog-preview-side-image">
							{/* <img src={logo} alt="" srcset="" /> */}
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default BlogList;
