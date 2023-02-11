function solution(n) {
  return Number([...String(n)].sort((a, b) => (a > b ? -1 : 1)).join(""));
}
