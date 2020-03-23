import * as React from 'react';
import Wrapper from './Wrapper';
import StarRatingComponent from 'react-star-rating-component';
import { MyMovieListItemType } from '../../types';

interface Props {
  movie: MyMovieListItemType;
  onMovieClick: (id: string) => void;
}
function MyMovieListItem(props: Props) {
  const { movie, onMovieClick } = props;
  return (
    <Wrapper
      onClick={() => onMovieClick(movie.imdbID)}
    >
      <span>{movie.Title}</span>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        editing={false}
        value={movie.rating || 0}
      />
    </Wrapper>
  );
}

export default MyMovieListItem;
