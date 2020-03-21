import globalConstants from '../globalConstants';

export default class MovieDB {
  public static getMoviesByName(name: string) {
    return fetch(`${globalConstants.moviesDbApi}s=${name}&page=${1}`)
      .then(res => res.json());
  }

  public static getMovieDetails(id: string) {
    return fetch(`${globalConstants.moviesDbApi}i=${id}`)
      .then(res => res.json());
  }
}
