function movies(arr) {
  let movies = [];

  for (let movie of arr) {

    if (movie.includes("addMovie")) {

      let currentMovie = movie.split("addMovie ")[1];
      let movi = { name: currentMovie };
      movies.push(movi);

    } else if (movie.includes("directedBy")) {

      let currentMovie = movie.split(" directedBy ");
      let [movieName, director] = currentMovie;

      let findMovie = movies.find((movie) => movie.name == movieName);

      if (findMovie) {
        findMovie.director = director;
      }

    } else if (movie.includes("onDate")) {
        
      let currentMovie = movie.split(" onDate ");
      let [movieName, date] = currentMovie;
      let findMovie = movies.find((movie) => movie.name == movieName);

      if (findMovie) {
        findMovie.date = date;
      }
    }
  }

  for (let movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

movies([
  "addMovie The Avengers",

  "addMovie Superman",

  "The Avengers directedBy Anthony Russo",

  "The Avengers onDate 30.07.2010",

  "Captain America onDate 30.07.2010",

  "Captain America directedBy Joe Russo",
]);
