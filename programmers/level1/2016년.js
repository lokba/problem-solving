const dayOfMonth = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dates = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  let totalDays = 0;

  for (let i = 1; i < a; i++) {
    totalDays += dayOfMonth[i];
  }

  totalDays += b;

  return dates[(totalDays + 4) % 7];
}
