import React from 'react';
import { MyMovieListItemType } from '../types';

interface Props {
  movie: MyMovieListItemType;
  onMovieClick: (id: string | undefined) => void;
}

function MyMovieListItem(props: Props) {
  return (
    <div onClick={() => props.onMovieClick(props.movie.imdbID)}>
      <div>{props.movie.Title}</div>
      <div>{props.movie.rating}</div>
    </div>
  );
}

export default MyMovieListItem;

