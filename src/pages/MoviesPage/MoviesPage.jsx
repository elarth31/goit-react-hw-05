import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'api/movies';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Heading } from 'components/Heading/Heading';
import NoFoundMessage from 'components/NoFoundMessage/NoFoundMessage';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query') ?? '';
  const [search, setSearch] = useState(queryValue);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSearched, setIsSearched] = useState(false); 

  useEffect(() => {
    if (!queryValue) return; 

    const handleSearchMovie = async () => {
      setIsLoading(true);
      setIsError(false);
      setMovies([]); 

      try {
        const { results } = await fetchSearchMovie(queryValue);
        setMovies(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsSearched(true); 
      }
    };

    handleSearchMovie();
  }, [queryValue]);

  const handleChange = (searchValue) => {
    setSearch(searchValue);
  };

  const handleSearchMovie = (query) => {
    setSearchParams(query); 
  };

  return (
    <section className="container">
      <Heading title={"Searching movies"} />

      <SearchForm
        handleChange={handleChange}
        handleSearchMovie={handleSearchMovie}
        query={search}
      />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {movies.length > 0 && <MovieList data={movies} />}

      {isSearched && !isLoading && !isError && movies.length === 0 && (
        <NoFoundMessage text={"Movies with search criteria not found"} />
      )}
    </section>
  );
};

export default MoviesPage;

