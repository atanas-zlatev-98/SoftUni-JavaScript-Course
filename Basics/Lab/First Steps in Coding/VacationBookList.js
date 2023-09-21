function bookList(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNeeded = Number(input[2]);
    
    let readingTime = pages / pagesPerHour;
    let hoursPerDay = readingTime / daysNeeded;
    
    console.log(hoursPerDay);
  }