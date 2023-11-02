function movies(arr) {

  let movies = [];

  for (let movie of arr) {

    if (movie.includes("addMovie")) {

      let command = movie.split("addMovie ");
      let movieName = command[1];

      let moviez = {
            name: movieName,
      }
      movies.push(moviez);
    }else if(movie.includes('directedBy')){

        let command = movie.split(' directedBy ');
        let [movieName, directorName] = command;

       let findMovie = movies.find(movie => movie.name == movieName);

        if(findMovie){
            findMovie.director = directorName;
        }
    }else if(movie.includes('onDate')){

        let command = movie.split(' onDate ');
        let [movieName, date] = command;

        let findMovie = movies.find(movie => movie.name == movieName);

        if(findMovie){
            findMovie.date = date;
        }
        
    }
  }
  for(let allMovies of movies) {

    if(allMovies.name && allMovies.director && allMovies.date){
        console.log(JSON.stringify(allMovies));
    }
   
  }
}

/*movies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);*/

movies(["addMovie The Avengers",
"addMovie Superman",
"The Avengers directedBy Anthony Russo",
"The Avengers onDate 30.07.2010",
"Captain America onDate 30.07.2010",
"Captain America directedBy Joe Russo"])