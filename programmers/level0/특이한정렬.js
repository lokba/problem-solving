function solution(numList, n) {
  return numList.sort((a, b) => {
    if (Math.abs(n - a) === Math.abs(n - b)) return a > b ? -1 : 1;
    return Math.abs(n - a) > Math.abs(n - b) ? 1 : -1;
  });
}
