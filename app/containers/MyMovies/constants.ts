enum ActionTypes {
  GET_MY_MOVIES = 'boilerplate/MyMovies/GET_MY_MOVIES',
  LOAD_MY_MOVIES_SUCCESS = 'movieRating/MyMovies/LOAD_MY_MOVIES_SUCCESS',
  LOAD_MY_MOVIES_ERROR = 'movieRating/MyMovies/LOAD_MY_MOVIES_ERROR',
  CHANGE_SORTING = 'movieRating/MyMovies/CHANGE_SORTING',
}

enum Sort {
  ASC = 'Sort.ASC',
  DSC = 'Sort.DSC',
  NAME = 'Sort.NAME',
  RATING = 'Sort.RATING',
}

export default ActionTypes;

export { Sort };


