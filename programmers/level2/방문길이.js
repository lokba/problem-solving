const 명령어 = {
  U: [0, 1],
  D: [0, -1],
  R: [1, 0],
  L: [-1, 0],
};

function solution(dirs) {
  let [x, y] = [0, 0];
  const set = new Set();

  for (let i = 0; i < dirs.length; i++) {
    const moveX = x + 명령어[dirs[i]][0];
    const moveY = y + 명령어[dirs[i]][1];

    if (Math.abs(moveX) > 5 || Math.abs(moveY) > 5) continue;

    set.add(`${x} ${y} ${moveX} ${moveY}`);
    set.add(`${moveX} ${moveY} ${x} ${y}`);
    x = moveX;
    y = moveY;
  }

  return set.size / 2;
}
