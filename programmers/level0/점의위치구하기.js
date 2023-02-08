function solution(dot) {
  const [x, y] = dot;

  if (x > 0) {
    if (y > 0) return 1;
    return 4;
  } else {
    if (y > 0) return 2;
    return 3;
  }
}
