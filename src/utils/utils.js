export const transformDate = function(unix) {
  const date = new Date(unix * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  const seconds = '0' + date.getSeconds();
  return `${hours}:${minutes.substring(minutes.length- 2)}:${seconds.substring(seconds.length- 2)}`;
}