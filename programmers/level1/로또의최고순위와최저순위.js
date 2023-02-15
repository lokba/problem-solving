const TABLE = new Map([
  [6, 1],
  [5, 2],
  [4, 3],
  [3, 4],
  [2, 5],
  [1, 6],
  [0, 6],
]);

function solution(lottos, win_nums) {
  let intersection = 0;
  let zero = 0;

  for (let lotto of lottos) {
    if (win_nums.includes(lotto)) intersection += 1;
    else if (lotto === 0) zero += 1;
  }

  return [TABLE.get(intersection + zero), TABLE.get(intersection)];
}
