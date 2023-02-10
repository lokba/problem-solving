function solution(array) {
  const obj = {};

  for (let item of array) {
    if (obj[item] === undefined) obj[item] = 1;
    else obj[item] += 1;
  }

  const sorted = Object.entries(obj).sort((a, b) => (a[1] > b[1] ? -1 : 1));

  if (sorted.length === 1) return Number(sorted[0][0]);
  return sorted[0][1] === sorted[1][1] ? -1 : Number(sorted[0][0]);
}
