/**
 * 알게된 점
 * 1. maps[좌표][좌표] = 0의 순서에 따라 효율성 점수가 달라진다. -> 방문한 곳을 또 방문할 수 있기 때문
 */

function solution(maps) {
  const [row, col] = [maps.length, maps[0].length];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length >= 1) {
    const [xpos, ypos, count] = queue.shift();

    if (xpos === row - 1 && ypos === col - 1) return count;

    for (let direction of directions) {
      let moveX = xpos + direction[0];
      let moveY = ypos + direction[1];

      if (
        moveX < 0 ||
        moveX > row - 1 ||
        moveY < 0 ||
        moveY > col - 1 ||
        maps[moveX][moveY] === 0
      )
        continue;

      queue.push([moveX, moveY, count + 1]);
      maps[moveX][moveY] = 0;
    }
  }

  return -1;
}
