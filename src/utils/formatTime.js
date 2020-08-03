export const formatTime = time => {
  if(time == null || isNaN(time) || time < 0){
    return null;
  } else {
    let seconds = Math.floor(time%60);
    let minutes = Math.floor(time/60)%60;
    let hours = Math.floor(time/3600);
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
};