/* eslint-disable-next-line */
export const getStringFromDate = (date) => {
  const yearStr = date.getFullYear();
  let monthStr = 1 + date.getMonth();
  let dayStr = date.getDate();
  let hourStr = date.getHours();
  let minuteStr = date.getMinutes();
  let secondStr = date.getSeconds();

  monthStr = `0${monthStr}`.slice(-2);
  dayStr = `0${dayStr}`.slice(-2);
  hourStr = `0${hourStr}`.slice(-2);
  minuteStr = `0${minuteStr}`.slice(-2);
  secondStr = `0${secondStr}`.slice(-2);

  let formatStr = 'YYYY-MM-DD hh:mm:ss';
  formatStr = formatStr.replace(/YYYY/g, yearStr);
  formatStr = formatStr.replace(/MM/g, monthStr);
  formatStr = formatStr.replace(/DD/g, dayStr);
  formatStr = formatStr.replace(/hh/g, hourStr);
  formatStr = formatStr.replace(/mm/g, minuteStr);
  formatStr = formatStr.replace(/ss/g, secondStr);

  return formatStr;
};

export const getNowDateWithString = (dt) => {
  const y = dt.getFullYear();
  const m = `00${dt.getMonth() + 1}`.slice(-2);
  const d = `00${dt.getDate()}`.slice(-2);
  const result = `${y}年${m}月${d}日`;
  return result;
};
