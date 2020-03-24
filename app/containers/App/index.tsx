import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';

import MoviesSearch from 'containers/MoviesSearch/Loadable';
import MovieDetails from 'containers/MovieDetails/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MyMovies from 'containers/MyMovies/Loadable';
import LoadingOverlay from 'components/LoadingOverlay';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from 'global-styles';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading } from './selectors';
import { useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';


const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const key = 'global';

const stateSelector = createStructuredSelector({
  loading: makeSelectLoading(),
});

export default function App() {
  const { loading } = useSelector(stateSelector);

  useInjectReducer({ key: key, reducer: reducer });

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Film Rating System"
        defaultTitle="Film Rating System"
      >
        <meta name="description" content="Film Rating System" />
      </Helmet>
      <Header />
      {loading && <LoadingOverlay/>}
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={MoviesSearch} />
          <Route path="/details/:id" component={MovieDetails} />
          <Route path="/my" component={MyMovies} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
