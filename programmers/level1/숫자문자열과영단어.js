const table = new Map([
  ["zero", "0"],
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
]);

function solution(s) {
  for (let [key, value] of Object.values([...table])) {
    s = s.replace(new RegExp(key, "g"), value);
  }

  return Number(s);
}
