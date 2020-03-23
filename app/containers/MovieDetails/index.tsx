import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StarRatingComponent from 'react-star-rating-component';
import { Flex, Box } from '@rebass/grid';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { selectDetailsState } from 'containers/MovieDetails/selectors';
import { getMovieDetails, ratingWasChanged, saveRating } from './actions';
import reducer from './reducer';
import saga from './saga';
import Poster from './components/Poster';
import Button from 'components/Button';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const key = 'movieDetails';

const stateSelector = createStructuredSelector({
  detailsState: selectDetailsState(),
});

export default function MovieDetails(props) {
  const { detailsState : {
    movieDetails,
    ratingWasChanged: ratingWasChangedFlag,
    },
  } = useSelector(stateSelector);

  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    dispatch(getMovieDetails(props.match.params.id));
  }, []);

  const changeRating = (nextValue, prevValue, name) => {
    if (nextValue) {
      const parsedRating = nextValue;
      dispatch(ratingWasChanged(parsedRating));
    }
  };

  return (
    <Flex
      width={1}
      pt={2}
    >
      <Helmet>
        <title>Movie details</title>
        <meta
          name="description"
          content="movie details page"
        />
      </Helmet>
      <Box
        width={1 / 3}
      >
        <Box
          p={1}
        >
          <Poster
            src={movieDetails.Poster}
          />
        </Box>
        <div style={{fontSize: 59}}>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={movieDetails.rating || 0}
            onStarClick={changeRating}
          />
        </div>
        <div>
          {ratingWasChangedFlag && (
            <Button onClick={() => dispatch(saveRating())}>
              <FormattedMessage {...messages.saveRating} />
            </Button>
          )}
        </div>
      </Box>
      <Box
        width={2 / 3}
      >
        <div>{movieDetails.imdbID}</div>
        <div>{movieDetails.Title}</div>
        <div>{movieDetails.Year}</div>
        <div>{movieDetails.Released}</div>
        <div>{movieDetails.Genre}</div>
        <div>{movieDetails.Title}</div>
        <div>{movieDetails.Type}</div>
      </Box>
    </Flex>
  );
}
