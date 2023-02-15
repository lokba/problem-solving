const TABLE = [...Array(26)].map((_, i) => i + "a".charCodeAt(0));

function solution(s, skip, index) {
  for (let str of skip) {
    const tableIdx = TABLE.indexOf(str.charCodeAt(0));

    if (tableIdx === -1) continue;

    TABLE.splice(tableIdx, 1);
  }

  let result = "";

  for (let str of s) {
    let tableIdx = TABLE.indexOf(str.charCodeAt(0));
    let nextTableIdx = (tableIdx + index) % TABLE.length;

    result += String.fromCharCode(TABLE[nextTableIdx]);
  }

  return result;
}
