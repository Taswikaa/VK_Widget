export const transformDate = function(unix) {
  const date = new Date(unix * 1000);
  const day =  date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  return `${day}.${month}.${year} в ${hours}:${minutes.substring(minutes.length- 2)}`;
}