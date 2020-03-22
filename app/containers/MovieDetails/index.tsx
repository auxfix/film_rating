import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { selectDetailsState } from 'containers/MovieDetails/selectors';
import { getMovieDetails, ratingWasChanged, saveRating } from './actions';
import reducer from './reducer';
import saga from './saga';
import Dropdown from 'react-dropdown';

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

  const changeRating = (rating) => {
    if (rating.value) {
      const parsedRating = Number.parseInt(rating.value, 10);
      dispatch(ratingWasChanged(parsedRating));
    }
  };

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
      <div>
        <Dropdown
          options={['1', '2', '3', '4', '5']}
          onChange={changeRating}
          placeholder={'no rating'}
          value={(movieDetails && movieDetails.raiting && movieDetails.raiting.toString()) || ''}
        />
      </div>
      <div>
        {ratingWasChangedFlag && (
          <button onClick={() => dispatch(saveRating())}>save rating</button>
        )}
      </div>
    </article>
  );
}
