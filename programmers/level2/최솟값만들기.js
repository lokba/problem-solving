function solution(A, B) {
  A.sort((a, b) => (a > b ? 1 : -1));
  B.sort((a, b) => (a > b ? -1 : 1));

  return A.reduce((acc, cur, index) => (acc += cur * B[index]), 0);
}
