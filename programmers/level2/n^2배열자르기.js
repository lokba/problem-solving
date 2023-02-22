function solution(n, left, right) {
  const array = [];

  for (let i = left; i <= right; i++) {
    const [row, idx] = [Math.floor(i / n), i % n];

    if (idx <= row) array.push(row + 1);
    else array.push(idx + 1);
  }

  return array;
}
