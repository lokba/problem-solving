function solution(sizes) {
  const row = Math.max(...sizes.flat());
  const col = Math.max(...sizes.map((size) => Math.min(...size)));

  return row * col;
}
