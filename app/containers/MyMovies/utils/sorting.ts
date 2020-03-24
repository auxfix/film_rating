import { Sort } from '../constants';
import { MyMovieListItemType } from '../types';

function sortRating(
  a: MyMovieListItemType,
  b: MyMovieListItemType,
  order: string = Sort.ASC,
) {
  const diff = a.rating - b.rating;

  if (order === Sort.ASC) {
    return diff;
  }

  return -1 * diff;
}

function sortName(
  a: MyMovieListItemType,
  b: MyMovieListItemType,
  order: string = Sort.ASC,
) {
  const diff = a.Title.toLowerCase().localeCompare(b.Title.toLowerCase());

  if (order === Sort.ASC) {
    return diff;
  }

  return -1 * diff;
}

function makeSort(
  movies: MyMovieListItemType[],
  sortField: string = Sort.NAME,
  order: string = Sort.ASC,
) {
  const copyToSort = movies.slice();

  const sortMethod = sortField === Sort.NAME ? sortName : sortRating;

  return copyToSort.sort((a, b) => sortMethod(a, b, order));
}

export default makeSort;
