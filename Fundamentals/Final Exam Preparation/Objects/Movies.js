function movies(arr) {
  let movies = [];

  for (let movie of arr) {

    if (movie.includes("addMovie")) {

      let name = movie.split("addMovie ")[1];
      let movieTemplate = { name };
      movies.push(movieTemplate);

    } else if (movie.includes("directedBy")) {

      let [movieName, director] = movie.split(" directedBy ");
      let findMovie = movies.find((movie) => movie.name == movieName);

      if (findMovie) {
        findMovie["director"] = director;
      }

    } else if (movie.includes(`onDate`)) {

      let [movieName, date] = movie.split(" onDate ");

     let findMovie = movies.find((movie) => movie.name == movieName);

     if(findMovie){
        findMovie['date'] = date;
     }

    }
  }

  for (let movie of movies) {
    
    if(movie.director && movie.date && movie.name){
        console.log(JSON.stringify(movie));
    }
    
  }
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );
