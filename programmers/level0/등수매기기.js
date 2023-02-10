function solution(score) {
  let _score = score.map(([eng, mat]) => eng + mat);
  _score.sort((a, b) => (a > b ? -1 : 1));

  return score.map(([eng, mat]) => _score.indexOf(eng + mat) + 1);
}
