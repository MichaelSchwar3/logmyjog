export const formatDate = date => {
  if(!date) return ""
  const month = date.slice(5,7)
  const day = date.slice(8,10)
  const year = date.slice(0,4)
  return `${month}/${day}/${year}`;
};

export const formatTime = (duration) => {
  const fullHours = (duration -(duration %3600))/3600
  duration = duration - (fullHours * 3600)
  const minutes = (duration - (duration % 60))/60
  const seconds = duration - (minutes * 60)
  const tmpMin = `0${minutes}`;
  const tmpSec = `0${seconds}`;
  const paddedMinutes = tmpMin.slice(tmpMin.length - 2);
  const paddedSeconds = tmpSec.slice(tmpSec.length - 2);
  return `${fullHours}:${paddedMinutes}:${paddedSeconds}`;
};

export const formatDuration = (hours, mins, secs) => {
  secs += (hours * 3600) + (mins * 60);
  return secs
}

export const formatPace = (seconds, distance) => {
  let pace = formatTime(Math.floor(seconds/distance));
  return pace.slice(3);
}
