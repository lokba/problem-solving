function solution(x, n) {
  return [...Array(n)].map((_, index) => x * (index + 1));
}
