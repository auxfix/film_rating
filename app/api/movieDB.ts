import globalConstants from '../globalConstants';

export default class MovieDB {
  public static getMovieByName(name: string) {
    return fetch(`${globalConstants.moviesDbApi}t=${name}&page=${1}`)
      .then(res => res.json());
  }
}
