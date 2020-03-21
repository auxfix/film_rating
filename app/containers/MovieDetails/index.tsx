import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectMovieDetails } from 'containers/MovieDetails/selectors';
import { getMovieDetails } from './actions';
import reducer from './reducer';
import saga from './saga';
import { loadMovies } from '../MoviesSearch/actions';

const key = 'movieDetails';

const stateSelector = createStructuredSelector({
  movieDetails: makeSelectMovieDetails(),
});

export default function MovieDetails(props) {
  const { movieDetails } = useSelector(stateSelector);

  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    dispatch(getMovieDetails(props.match.params.id));
  }, []);

  return (
    <article>
      <Helmet>
        <title>Movie details</title>
        <meta
          name="description"
          content="movie details page"
        />
      </Helmet>
      Movie details
      <div>{movieDetails && movieDetails.imdbID}</div>
      <div>{movieDetails && movieDetails.Title}</div>
    </article>
  );
}
