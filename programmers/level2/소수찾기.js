function solution(numbers) {
  const list = numbers.split("").map(Number);
  const cases = [];

  for (let i = 1; i <= numbers.length; i++) {
    cases.push(...permutation(list, i).map((v) => Number(v.join(""))));
  }

  return [...new Set(cases)].filter((v) => isPrime(v)).length;
}

function permutation(list, count) {
  if (count === 1) return list.map((v) => [v]);

  const result = [];

  for (let i = 0; i < list.length; i++) {
    const rest = [...list.slice(0, i), ...list.slice(i + 1)];
    const permu = permutation(rest, count - 1);
    const attached = permu.map((v) => [list[i], ...v]);

    result.push(...attached);
  }

  return result;
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
