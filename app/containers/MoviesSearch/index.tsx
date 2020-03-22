import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { Flex, Box } from '@rebass/grid';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import { changeMovieName, loadMovies } from './actions';
import BigInput from 'components/BigInput';
import { makeSelectSearchName, makeSelectMovies, makeSelectTotalResults } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { MovieListItemType } from './components/MovieListItem/types';
import MovieItem from './components/MovieListItem';
import Button from 'components/Button';
import messages from './messages';

import './paging-styles.css';

const key = 'movieSearch';

const stateSelector = createStructuredSelector({
  movies: makeSelectMovies(),
  totalResults: makeSelectTotalResults(),
  searchName: makeSelectSearchName(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function MovieSearch() {
  const { movies, searchName, loading, error, totalResults } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeMovieName = (searchString) => dispatch(changeMovieName(searchString));
  const onMakeSearch = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!searchName) {
      return;
    }
    dispatch(loadMovies(1));
  };

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    if (searchName && searchName.trim().length > 0) {
      onMakeSearch();
    }
  }, []);

  return (
    <Flex
      flexDireaction={'column'}
      width={1}
    >
      <Helmet>
        <title>Movies Search</title>
        <meta
          name="description"
          content="Movies search page"
        />
      </Helmet>
      <Flex
        width={1}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <Box
          width={1}
        >
          <Box
            mt={4}
          >
            <BigInput
              onChangeText={onChangeMovieName}
              value={searchName}
              onPressEnter={onMakeSearch}
            />
          </Box>
          <Flex
            w={1}
            py={2}
            justifyContent={'flex-end'}
          >
            <Button onClick={onMakeSearch}>
              <FormattedMessage {...messages.Search} />
            </Button>
          </Flex>
          {
            movies && movies.map((mv: MovieListItemType) => (
              <MovieItem
                key={mv.imdbID}
                movie={mv}
                onMovieClick={(id) => dispatch(push(`/details/${id}`))}
              />
            ))
          }
        </Box>
        <Box
          w={1}
        >
          <ReactPaginate
            pageCount={Math.ceil(totalResults / 10)}
            onPageChange={(data) => {
              dispatch(loadMovies(data.selected + 1));
            }}
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
