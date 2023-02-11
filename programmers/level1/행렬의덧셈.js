function solution(arr1, arr2) {
  return arr1.map((arr, col) =>
    arr.map((value, row) => value + arr2[col][row])
  );
}
