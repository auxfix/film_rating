export default class MyMovie {
  public static saveRating(filmName: string, rating: number) {
    return Promise.resolve(true);
  }

  public static getRating(filmName: string) {
    return Promise.resolve({});
  }
}
