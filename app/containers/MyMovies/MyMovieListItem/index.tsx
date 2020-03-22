import React from 'react';
import { MovieDetails } from 'containers/MovieDetails/types';

interface Props {
  movie: MovieDetails;
  onMovieClick: (id: string | undefined) => void;
}

function MyMovieListItem(props: Props) {
  return (
    <div onClick={() => props.onMovieClick(props.movie.imdbID)}>
      <div>{props.movie.Title}</div>
      <div>{props.movie.raiting}</div>
    </div>
  );
}

export default MyMovieListItem;

