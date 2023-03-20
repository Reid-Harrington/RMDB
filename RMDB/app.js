const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});





class Movie {
  // Constants
  static MIN_RATING = 0;
  static MAX_RATING = 10;
  static FIRST_YEAR = 1888;
  static GENRES = [
    "science fiction",
    "fantasy",
    "drama",
    "romance",
    "comedy",
    "zombie",
    "action",
    "historical",
    "horror",
    "war",
    "mystery"
  ];
  // Defines a range of valid integer genre codes:
  static GENRE_CODES = [...Array(Movie.GENRES.length).keys()];

  static genres_menu() {
    /*
    -------------------------------------------------------
    Creates a string of Movie genres in the format:
      0 science fiction
      1 fantasy
      2 drama
      ...
    Use: s = Movie.genres_menu()
    Use: console.log(Movie.genres_menu())
    -------------------------------------------------------
    Returns:
        string - A numbered string of Movie genres.
    -------------------------------------------------------
    */
    let string = "";
    for (let i = 0; i < Movie.GENRES.length; i++) {
      string += `${i} ${Movie.GENRES[i]}\n`;
    }
    string = string.trimEnd();
    return string;
  }

  constructor(title, year, director, rating, genres) {
    /*
    -------------------------------------------------------
    Initializes a Movie object.
    Use: const movie = new Movie(title, year, director, rating, genres)
    -------------------------------------------------------
    Parameters:
        title - movie title (str)
        year - year of release (int)
        director - name of director (str)
        rating - rating of 1 - 10 from IMDB (float)
        genres - numbers representing movie genres_list (list of int)
    Returns:
        A new Movie object (Movie)
    -------------------------------------------------------
    */
    if (year < Movie.FIRST_YEAR) {
      throw new Error(`Movie year must be >= ${Movie.FIRST_YEAR}`);
    }
    if (
      rating !== null &&
      (rating < Movie.MIN_RATING || rating > Movie.MAX_RATING)
    ) {
      throw new Error(
        `Movie ratings must be between ${Movie.MIN_RATING} and ${Movie.MAX_RATING}`
      );
    }
    if (
      genres !== null &&
      genres.length !== 0 &&
      !Movie.GENRE_CODES.includes(Math.min(...genres))
    ) {
      throw new Error(`Invalid genre code ${Math.min(...genres)}`);
    }
    if (
      genres !== null &&
      genres.length !== 0 &&
      !Movie.GENRE_CODES.includes(Math.max(...genres))
    ) {
      throw new Error(`Invalid genre code ${Math.max(...genres)}`);
    }

    this.title = title;
    this.year = year;
    this.director = director;
    this.rating = rating;
    this.genres = genres;
  }

