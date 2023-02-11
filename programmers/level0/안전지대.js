function solution(board) {
  let col = board.length;
  let row = board[0].length;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 1) {
        //row - 1
        if (i - 1 >= 0) {
          if (j - 1 >= 0 && board[i - 1][j - 1] !== 1)
            board[i - 1][j - 1] = "X";
          if (j + 1 <= row - 1 && board[i - 1][j + 1] !== 1)
            board[i - 1][j + 1] = "X";
          if (board[i - 1][j] !== 1) board[i - 1][j] = "X";
        }
        //row
        if (j - 1 >= 0 && board[i][j - 1] !== 1) board[i][j - 1] = "X";
        if (j + 1 <= row - 1 && board[i][j + 1] !== 1) board[i][j + 1] = "X";
        //row + 1
        if (i + 1 <= col - 1) {
          if (j - 1 >= 0 && board[i + 1][j - 1] !== 1)
            board[i + 1][j - 1] = "X";
          if (j + 1 <= row - 1 && board[i + 1][j + 1] !== 1)
            board[i + 1][j + 1] = "X";
          if (board[i + 1][j] !== 1) board[i + 1][j] = "X";
        }
      }
    }
  }

  return board.flat().filter((item) => item === 0).length;
}
