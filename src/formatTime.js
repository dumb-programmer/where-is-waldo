const formatTime = (time) => {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const tseconds = Math.floor(time % 1000);
  return `${hours}:${minutes}:${seconds}:${tseconds || 0}`;
};

export default formatTime;
