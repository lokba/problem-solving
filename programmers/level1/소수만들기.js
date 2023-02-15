function solution(nums) {
  const list = combination(nums, 3);
  let result = 0;

  for (let item of list) {
    const sum = item.reduce((acc, cur) => (acc += cur), 0);
    if (isPrime(sum)) result += 1;
  }

  return result;
}

function isPrime(n) {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
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
