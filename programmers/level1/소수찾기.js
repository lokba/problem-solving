function solution(n) {
  return get소수테이블(n).filter((item) => item === 1).length;
}

function get소수테이블(n) {
  const PRIME_TABLE = Array(n + 1).fill(1);

  PRIME_TABLE[0] = 0;
  PRIME_TABLE[1] = 0;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (PRIME_TABLE[i]) {
      for (let j = Math.pow(i, 2); j <= n; j += i) {
        if (PRIME_TABLE[j]) PRIME_TABLE[j] = 0;
      }
    }
  }

  return PRIME_TABLE;
}
