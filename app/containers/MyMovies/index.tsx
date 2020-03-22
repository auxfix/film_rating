import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectMyMovies } from './selectors';
import { getMyMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import MyMovieListItem from './MyMovieListItem';

const key = 'myMovies';

const stateSelector = createStructuredSelector({
  movies: makeSelectMyMovies(),
});

export default function HomePage() {
  const { movies } = useSelector(stateSelector);

  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    dispatch(getMyMovies());
  }, []);

  return (
    <article>
      <Helmet>
        <title>My Movies</title>
        <meta
          name="description"
          content="My Movies page"
        />
      </Helmet>
      My Movies page
      <div>
        {
          movies.map(mv => (
            <MyMovieListItem
              key={mv.imdbID}
              onMovieClick={(id) => dispatch(push(`/details/${id}`))}
              movie={mv}
          />))
        }
      </div>
    </article>
  );
}
