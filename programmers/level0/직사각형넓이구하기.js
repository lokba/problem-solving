function solution(dots) {
  let [x1, y1] = dots[0];
  let [x2, y2] = dots.slice(1).filter(([x, y]) => x !== x1 && y !== y1)[0];

  return Math.abs(x1 - x2) * Math.abs(y1 - y2);
}
