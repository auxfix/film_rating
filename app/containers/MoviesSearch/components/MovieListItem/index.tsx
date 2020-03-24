import * as React from 'react';
import Wrapper from './Wrapper';
import { MovieListItemType } from './types';

interface Props {
  movie: MovieListItemType;
  onMovieClick: (id: string) => void;
}
function MovieListItem(props: Props) {
  const { movie, onMovieClick } = props;
  return (
    <Wrapper onClick={() => onMovieClick(movie.imdbID)}>{movie.Title}</Wrapper>
  );
}

export default MovieListItem;
