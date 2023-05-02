import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);

	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsFetching(true);
		fetch(url)
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
				setError(err);
				console.log(err.message);
				setIsFetching(false);
			});
	}, [url]);
	return { data, isFetching, error };
};

export default useFetch;
