function solution(lines) {
  const obj = {};

  for (let [start, end] of lines) {
    for (let i = start + 1; i <= end; i++) {
      if (obj[`${i - 1}-${i}`] === undefined) obj[`${i - 1}-${i}`] = 1;
      else obj[`${i - 1}-${i}`] += 1;
    }
  }

  return Object.values(obj).filter((value) => value >= 2).length;
}
