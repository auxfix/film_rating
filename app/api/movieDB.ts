import globalConstants from '../globalConstants';

export default class MovieDB {
  public static getMoviesByName(name: string, page: number = 1) {
    return fetch(`${globalConstants.moviesDbApi}s=${name}&page=${page}`)
      .then(res => res.json());
  }

  public static getMovieDetails(id: string) {
    return fetch(`${globalConstants.moviesDbApi}i=${id}`)
      .then(res => res.json());
  }
}
