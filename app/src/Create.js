import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
	const url = 'http://localhost:8000/blogs';

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');

	const [isPosting, setIsPosting] = useState(false);

	const history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();
		const blog = { title, body, author };
		setIsPosting(true);
		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log('posted successfully');
			setIsPosting(false);
			history.push('/');
		});
	};

	return (
		<div className="create">
			<h2>Post a new blog</h2>

			<form onSubmit={handleSubmit}>
				<label>Blog Title:</label>
				<input
					type="text"
					placeholder="Enter the title for the blog!"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Text:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<label type="text" required>
					Blog Author:
				</label>
				<input
					type="text"
					required
					placeholder="Enter your name"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				{!isPosting && <button>Post Blog</button>}
				{isPosting && <button disabled>Posting...</button>}
			</form>
		</div>
	);
};

export default Create;
