/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectError, makeSelectLoading, makeSelectRepos } from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const stateSelector = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function HomePage() {
  const { repos, username, loading, error } = useSelector(stateSelector);

  const dispatch = useDispatch();

  // Not gonna declare event types here. No need. any is fine
  const onChangeUsername = (evt: any) => dispatch(changeUsername(evt.target.value));
  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!username) {
      return;
    }
    dispatch(loadRepos());
  };

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }, []);

  const reposListProps = {
    loading: loading,
    error: error,
    repos: repos,
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
        Movies search page
      </div>
    </article>
  );
}
