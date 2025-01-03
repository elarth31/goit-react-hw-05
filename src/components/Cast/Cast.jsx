import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Cast.module.css';
import { fetchMovieCredits } from 'api/movies';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import CastCard from 'components/CastCard/CastCard';
import NoFoundMessage from 'components/NoFoundMessage/NoFoundMessage';

const Cast = () => {
  const { movieId } = useParams();
  const [state, setState] = useState({
    cast: null,
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    const fetchCast = async () => {
      if (!movieId) return;

      setState((prevState) => ({ ...prevState, isLoading: true, isError: false }));

      try {
        const { cast } = await fetchMovieCredits(movieId);
        setState({ cast, isLoading: false, isError: false });
      } catch {
        setState({ cast: null, isLoading: false, isError: true });
      }
    };

    fetchCast();
  }, [movieId]);

  const { cast, isLoading, isError } = state;

  const renderContent = () => {
    if (isLoading) return <Loader />;
    if (isError) return <ErrorMessage />;
    if (!cast) return <NoFoundMessage text="Unfortunately, there are no cast for this movie" />;
    if (cast.length === 0) return <NoFoundMessage text="Unfortunately, there are no cast for this movie" />;

    return cast.map(({ id, ...rest }) => (
      <li className={styles.cardItem} key={id}>
        <CastCard data={rest} />
      </li>
    ));
  };

  return <ul className={styles.cardList}>{renderContent()}</ul>;
};

export default Cast;
