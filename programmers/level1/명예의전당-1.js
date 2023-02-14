function solution(k, scores) {
  let hallOfFame = [];
  const result = [];

  for (let score of scores) {
    hallOfFame.push(score);
    hallOfFame = [...hallOfFame].sort((a, b) => (a > b ? -1 : 1)).slice(0, k);
    result.push(hallOfFame[hallOfFame.length - 1]);
  }

  return result;
}
