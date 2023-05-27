export function TimeToToday(createdAt: number) {
  const milliSeconds = +new Date() - createdAt;
  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  if (minutes < 60)
    return `${Math.floor(minutes) === 0 ? 1 : Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
}

export const restDate = (currentDate: number, endDate: number) => {
  const month = 60 * 60 * 24 * 30;
  const day = 60 * 60 * 24;
  const hour = 60 * 60;
  const minuetes = 60;
  let s = (endDate - currentDate) / 1000;
  const M = Math.floor(s / month);
  s -= M * month;
  const d = Math.floor(s / day);
  s -= d * day;
  const h = Math.floor(s / hour);
  s -= h * hour;
  const m = Math.floor(s / minuetes);
  s -= m * minuetes;
  s = Math.floor(s);
  return `${M}개월 ${d}일 ${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${
    s < 10 ? "0" + s : s
  } 남음`;
};
