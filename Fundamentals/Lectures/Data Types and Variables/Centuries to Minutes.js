function centuriesToMinutes(century){

    let centuryInYears = century * 100;
    let yearsToDays = Math.trunc(centuryInYears * 365.2422);
    let daysToHours = yearsToDays * 24;
    let hoursToMinutes = daysToHours * 60;

    console.log(`${century} centuries = ${centuryInYears} years = ${yearsToDays} days = ${daysToHours} hours = ${hoursToMinutes} minutes`);

}

centuriesToMinutes(1);
centuriesToMinutes(5);
