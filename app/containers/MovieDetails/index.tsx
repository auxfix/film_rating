import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StarRatingComponent from 'react-star-rating-component';
import { Flex, Box } from '@rebass/grid';
import { injectIntl, FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { selectDetailsState } from 'containers/MovieDetails/selectors';
import { getMovieDetails, ratingWasChanged, saveRating } from './actions';
import reducer from './reducer';
import saga from './saga';
import Poster from './components/Poster';
import Button from 'components/Button';
import messages from './messages';
import H1 from 'components/H1';
import Detail from './components/Detail';

const key = 'movieDetails';
const intlScope = 'boilerplate.containers.MovieDetails.';

const stateSelector = createStructuredSelector({
  detailsState: selectDetailsState(),
});

function MovieDetails(props) {
  const { formatMessage } = props.intl;
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
        mx={2}
      >
        <Box
          mb={3}
        >
          <H1>{movieDetails.Title}</H1>
        </Box>

        <Detail
          label={formatMessage({ id: `${intlScope}imdb`})}
          detail={movieDetails.imdbID}
        />
        <Detail
          label={formatMessage({ id: `${intlScope}Year`})}
          detail={movieDetails.Year}
        />
        <Detail
          label={formatMessage({ id: `${intlScope}Released`})}
          detail={movieDetails.Released}
        />
        <Detail
          label={formatMessage({ id: `${intlScope}Genre`})}
          detail={movieDetails.Genre}
        />
        <Detail
          label={formatMessage({ id: `${intlScope}Type`})}
          detail={movieDetails.Type}
        />
      </Box>
    </Flex>
  );
}

export default injectIntl(MovieDetails);
