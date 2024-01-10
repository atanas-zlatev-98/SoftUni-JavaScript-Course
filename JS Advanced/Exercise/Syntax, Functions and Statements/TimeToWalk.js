function timeToWalk(steps, footprintMeters, speed) {

  let distance = steps * footprintMeters;
  let restTime = (Math.floor(distance / 500)) * 60;
  let metersPerSec = (speed * 1000) / 3600;
  let time = distance / metersPerSec + restTime;

  let minutes = Math.floor(time / 60);
  let seconds = Math.round(time - (minutes * 60));
  let hours = Math.floor(time / 3600);

  console.log(`${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}`:`${seconds}`}`)
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.70, 5.5);