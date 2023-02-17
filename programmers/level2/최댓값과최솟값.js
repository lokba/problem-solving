function solution(s) {
  const sorted = s
    .split(" ")
    .map(Number)
    .sort((a, b) => (a > b ? 1 : -1));

  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}
