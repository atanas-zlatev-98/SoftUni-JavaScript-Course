function cat(input){
let time = Number(input[0]);

let norm = 30_000;
let workingDays = 365 - time;

let playtime = (workingDays * 63) + (time * 127);

let difference = Math.abs(norm - playtime);

let hours = Math.floor(difference / 60);
let mins = Math.floor(difference - (hours*60));

if(norm > playtime){
    console.log('Tom sleeps well')
    console.log(`${hours} hours and ${mins} minutes less for play`);
}else {
    console.log('Tom will run away');
    console.log(`${hours} hours and ${mins} minutes more for play`);
}

}

cat([20]);
cat([113]);