function solution(keyInput, board) {
  let [x, y] = [0, 0];
  let xMax = (board[0] - 1) / 2;
  let yMax = (board[1] - 1) / 2;

  for (let input of keyInput) {
    let move = [0, 0];

    if (input === "left") move = [-1, 0];
    else if (input === "right") move = [1, 0];
    else if (input === "up") move = [0, 1];
    else if (input === "down") move = [0, -1];

    if (Math.abs(x + move[0]) <= xMax && Math.abs(y + move[1]) <= yMax) {
      x += move[0];
      y += move[1];
    }
  }

  return [x, y];
}
