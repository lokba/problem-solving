function solution(board, moves) {
  const table = generateTable(board);
  const stack = [];

  for (let move of moves) {
    if (table[move - 1].length === 0) continue;

    stack.push(table[move - 1].pop());
  }

  let result = 0;
  let index = 0;

  while (index < stack.length - 1) {
    if (stack[index] === stack[index + 1]) {
      result += 2;
      stack.splice(index, 2);
      index -= 1;
    } else index += 1;
  }

  return result;
}

function generateTable(board) {
  const table = [];

  for (let i = 0; i < board[0].length; i++) {
    const row = [];

    for (let j = board.length - 1; j >= 0; j--) {
      if (board[j][i] === 0) continue;
      row.push(board[j][i]);
    }

    table.push(row);
  }

  return table;
}
