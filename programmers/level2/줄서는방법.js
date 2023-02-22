function solution(n, k) {
  const factorial = getFactorial(n - 1);
  const array = [...Array(n)].map((_, i) => i + 1);
  const result = [];

  while (n !== 0) {
    const row = Math.floor((k - 1) / factorial[n - 1]);

    result.push(array[row]);
    array.splice(row, 1);

    k -= row * factorial[n - 1];
    n -= 1;
  }

  return result;
}

function getFactorial(n) {
  const list = [1];

  for (let i = 1; i <= n; i++) {
    list[i] = list[i - 1] * i;
  }

  return list;
}
