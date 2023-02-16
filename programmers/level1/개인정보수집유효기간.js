function solution(today, terms, privacies) {
  const 유효기간테이블 = new Map();

  for (let term of terms) {
    const [type, 유효기간] = term.split(" ");
    유효기간테이블.set(type, Number(유효기간) * 28);
  }

  const result = [];

  for (let i = 0; i < privacies.length; i++) {
    const [past, type] = privacies[i].split(" ");
    if (유효기간테이블.get(type) <= get지난일(today, past)) result.push(i + 1);
  }

  return result;
}

function get지난일(today, past) {
  return getTotalDays(...splitDate(today)) - getTotalDays(...splitDate(past));
}

function getTotalDays(year, month, day) {
  return (year - 2000) * 12 * 28 + (month - 1) * 28 + day;
}

function splitDate(date) {
  return date.split(".").map(Number);
}
