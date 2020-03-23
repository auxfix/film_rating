import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { Flex, Box } from '@rebass/grid';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectMyMovies, makeSelectMyMoviesSort } from './selectors';
import { getMyMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import MyMovieListItem from './components/MyMovieListItem';
import MoviesList from './components/MoviesList';
import PageName from './components/PageName';
import messages from './messages';
import sortUtil from './utils/sorting';

const key = 'myMovies';

const stateSelector = createStructuredSelector({
  movies: makeSelectMyMovies(),
  sortState: makeSelectMyMoviesSort(),
});

export default function HomePage() {
  const { movies, sortState } = useSelector(stateSelector);
  const sortedMovies = sortUtil(movies, sortState.field, sortState.order);

  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    dispatch(getMyMovies());
  }, []);

  return (
    <Flex
      flexDirection="column"
      width={1}
    >
      <Helmet>
        <title>My Movies</title>
        <meta
          name="description"
          content="My Movies page"
        />
      </Helmet>
      <Box
        mt="2"
      >
        <PageName>
          <FormattedMessage {...messages.myMovies} />
        </PageName>
      </Box>
      <MoviesList>
        {
          sortedMovies.map(mv => (
            <MyMovieListItem
              key={mv.imdbID}
              onMovieClick={(id) => dispatch(push(`/details/${id}`))}
              movie={mv}
          />))
        }
      </MoviesList>
    </Flex>
  );
}
