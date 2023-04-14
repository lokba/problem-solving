function solution(dots) {
  const list = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  for (let i = 0; i < list.length; i++) {
    const [first, second, third, fourth] = list[i];
    const [x1, y1] = dots[first];
    const [x2, y2] = dots[second];
    const [x3, y3] = dots[third];
    const [x4, y4] = dots[fourth];

    if ((x2 - x1) / (y2 - y1) === (x4 - x3) / (y4 - y3)) return 1;
  }

  return 0;
}
