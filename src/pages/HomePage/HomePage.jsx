import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'api/movies';
import { Heading } from 'components/Heading/Heading';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		const handleTrendMovies = async () => {
			setIsLoading(true);
			setIsError(false);

			try {
				const { results } = await fetchTrendMovies();
				setMovies(results);
			} catch (error) {
				setIsError(true);
				setErrorMessage(error.message || 'Something went wrong');
			} finally {
				setIsLoading(false);
			}
		};
		handleTrendMovies();
	}, []);

	return (
		<section className="container">
			<Heading title={'Trending today'} />
			{movies.length > 0 && !isLoading && <MovieList data={movies} />}
			{isLoading && <Loader />}
			{isError && <ErrorMessage text={errorMessage} />}
		</section>
	);
};

export default HomePage;

