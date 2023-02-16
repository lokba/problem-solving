function solution(d, budget) {
  const sorted = d.sort((a, b) => (a > b ? 1 : -1));

  let sum = 0;
  let result = 0;

  for (let value of sorted) {
    sum += value;

    if (sum <= budget) result += 1;
    else break;
  }

  return result;
}
