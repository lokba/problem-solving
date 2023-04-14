function solution(n, m, section) {
  let count = 0;
  let end = -1;

  for (let item of section) {
    if (end < item) {
      count += 1;
      end = item + m - 1;
    }
  }

  return count;
}
