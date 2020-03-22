import { MovieDetails } from '../containers/MovieDetails/types';
import GlobalConstants from '../globalConstants';

const { myMoviesStorageName } = GlobalConstants;

export default class MyMovie {
  public static saveMyMovie(movie: MovieDetails): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const myMoviesRawData = localStorage.getItem(myMoviesStorageName);
      let myMovies: MovieDetails[];
      if (!myMoviesRawData) {
        myMovies = [movie];
      } else {
        const allMyMovies: MovieDetails[] = JSON.parse(myMoviesRawData);
        const foundIndex = allMyMovies.findIndex(mv => mv.imdbID === movie.imdbID);
        if (foundIndex === -1) {
          allMyMovies.push(movie);
        } else {
          allMyMovies[foundIndex].raiting = movie.raiting;
        }
        myMovies = allMyMovies;
      }

      const rawData = JSON.stringify(myMovies);
      localStorage.setItem(myMoviesStorageName, rawData);
      resolve(true);
    });
  }

  public static getMyMovieById(id: string): Promise<MovieDetails | null> {
    return new Promise<MovieDetails | null>((resolve) => {
      const myMoviesRawData = localStorage.getItem(myMoviesStorageName);
      if (!myMoviesRawData) {
        resolve(null);
      } else {
        const myMovies: MovieDetails[] = JSON.parse(myMoviesRawData);
        const foundMovie = myMovies.find(mv => mv.imdbID === id);
        resolve(foundMovie);
      }

    });
  }

  public static getMyMovies(): Promise<MovieDetails[]> {
    return new Promise<MovieDetails[]>((resolve) => {
      const myMoviesRawData = localStorage.getItem(myMoviesStorageName);
      if (!myMoviesRawData) {
        resolve([]);
      } else {
        const myMovies: MovieDetails[] = JSON.parse(myMoviesRawData);
        resolve(myMovies);
      }
    });
  }
}
