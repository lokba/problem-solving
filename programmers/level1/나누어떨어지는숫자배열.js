function solution(arr, divisor) {
  const filtered = arr.filter((item) => item % divisor === 0);

  return filtered.length === 0
    ? [-1]
    : filtered.sort((a, b) => (a > b ? 1 : -1));
}
