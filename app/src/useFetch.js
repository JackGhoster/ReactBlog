import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);

	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		setIsFetching(true);
		fetch(url, { signal: abortController.signal })
			.then((responce) => {
				if (!responce.ok) {
					throw Error('Could not fetch data from database');
				}
				return responce.json();
			})
			.then((data) => {
				setData(data);
				setIsFetching(false);
				setError(null);
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('fetch aborted');
				} else {
					setError(err);
					console.log(err.message);
					setIsFetching(false);
				}
			});
		return () => {
			abortController.abort();
		};
	}, [url]);
	return { data, isFetching, error };
};

export default useFetch;
