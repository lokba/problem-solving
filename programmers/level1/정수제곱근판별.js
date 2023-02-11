function solution(n) {
  const value = Math.sqrt(n);

  return value === Math.floor(value) ? Math.pow(value + 1, 2) : -1;
}
