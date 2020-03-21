import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import { changeMovieName, loadMovies } from './actions';
import { makeSelectSearchName, makeSelectMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { MovieListItem } from './MovieListItem/types';

const key = 'movieSearch';

const stateSelector = createStructuredSelector({
  movies: makeSelectMovies(),
  serachName: makeSelectSearchName(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function HomePage() {
  const { movies, serachName, loading, error } = useSelector(stateSelector);

  const dispatch = useDispatch();

  const onChangeMovieName = (evt: any) => dispatch(changeMovieName(evt.target.value));
  const onMakeSearch = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!serachName) {
      return;
    }
    dispatch(loadMovies());
  };

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    if (serachName && serachName.trim().length > 0) {
      onMakeSearch();
    }
  }, []);

  const reposListProps = {
    loading: loading,
    error: error,
    movies: movies,
  };

  return (
    <article>
      <Helmet>
        <title>Movies Search</title>
        <meta
          name="description"
          content="Movies search page"
        />
      </Helmet>
      <div>
        <input onChange={onChangeMovieName}/>
        <button onClick={onMakeSearch}>Search</button>

        {
          movies.map((mv: MovieListItem) => (<div key={mv.Title}>{mv.Title}</div>))
        }
      </div>
    </article>
  );
}
