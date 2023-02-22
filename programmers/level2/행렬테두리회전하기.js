function solution(rows, columns, queries) {
  const array = generateArray(rows, columns);
  const result = [];

  for (let [startRow, startCol, endRow, endCol] of queries) {
    const list = [];
    let idx = 0;

    for (let i = startRow - 1; i <= endRow - 1; i++) {
      if (i === startRow - 1) {
        for (let j = startCol - 1; j <= endCol - 1; j++) {
          if (j - 1 < startCol - 1) list.push(array[i + 1][j]);
          else list.push(array[i][j - 1]);
        }
      } else if (i === endRow - 1) {
        for (let j = startCol - 1; j <= endCol - 1; j++) {
          if (j + 1 > endCol - 1) list.push(array[i - 1][j]);
          else list.push(array[i][j + 1]);
        }
      } else {
        list.push(array[i + 1][startCol - 1]);
        list.push(array[i - 1][endCol - 1]);
      }
    }

    for (let i = startRow - 1; i <= endRow - 1; i++) {
      if (i === startRow - 1 || i === endRow - 1) {
        for (let j = startCol - 1; j <= endCol - 1; j++) {
          array[i][j] = list[idx++];
        }
      } else {
        array[i][startCol - 1] = list[idx++];
        array[i][endCol - 1] = list[idx++];
      }
    }

    result.push(Math.min(...list));
  }

  return result;
}

function generateArray(rows, columns) {
  return [...Array(rows)].map((_, rowIdx) =>
    [...Array(columns)].map((_, colIdx) => rowIdx * columns + colIdx + 1)
  );
}
