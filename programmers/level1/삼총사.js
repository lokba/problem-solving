function solution(number) {
  const cases = combination(number, 3);
  let result = 0;

  for (let [x, y, z] of cases) {
    if (x + y + z === 0) result += 1;
  }

  return result;
}

function combination(list, count) {
  if (count === 1) return list.map((item) => [item]);

  const result = [];

  for (let i = 0; i < list.length; i++) {
    const slicing = list.slice(i + 1);
    const combi = combination(slicing, count - 1);

    result.push(...combi.map((v) => [...v, list[i]]));
  }

  return result;
}
