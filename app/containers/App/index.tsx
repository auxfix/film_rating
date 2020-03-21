/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';

import MoviesSearch from 'containers/MoviesSearch/Loadable';
import MovieDetails from 'containers/MovieDetails/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MyMovies from 'containers/MyMovies/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;


export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Film Rating System"
        defaultTitle="Film Rating System"
      >
        <meta name="description" content="Film Rating System" />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={MoviesSearch} />
          <Route path="/details" component={MovieDetails} />
          <Route path="/my" component={MyMovies} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
