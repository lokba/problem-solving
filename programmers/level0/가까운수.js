function solution(array, n) {
  const sorted = [...array].sort((a, b) => {
    if (Math.abs(a - n) === Math.abs(b - n)) return a > b ? 1 : -1;
    else return Math.abs(a - n) > Math.abs(b - n) ? 1 : -1;
  });

  return sorted[0];
}
