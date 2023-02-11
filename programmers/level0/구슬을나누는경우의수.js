function factorial(n) {
  const list = [1];

  for (let i = 1; i <= n; i++) {
    list[i] = list[i - 1] * i;
  }

  return list[n];
}

function solution(balls, share) {
  const [maxValue, minValue] = [
    Math.max(balls - share, share),
    Math.min(balls - share, share),
  ];

  let 분모 = 1;
  for (let i = maxValue + 1; i <= balls; i++) {
    분모 *= i;
  }

  return 분모 / factorial(minValue);
}
