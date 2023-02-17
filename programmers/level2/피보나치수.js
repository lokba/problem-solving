function solution(n) {
  const list = [0, 1];

  for (let i = 2; i <= n; i++) {
    const value = list[list.length - 1] + list[list.length - 2];
    list[i] = value % 1234567;
  }

  return list[n];
}
