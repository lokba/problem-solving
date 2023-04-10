function solution(str1, str2) {
  const list1 = trim(str1.toLowerCase());
  const list2 = trim(str2.toLowerCase());

  let [intersection, union] = [0, 0];

  for (let [key, value] of Object.entries(list1)) {
    if (list2[key]) {
      intersection += Math.min(value, list2[key]);
      union += Math.max(value, list2[key]);
    } else union += value;
  }

  for (let [key, value] of Object.entries(list2)) {
    if (!list1[key]) union += value;
  }

  if (union === 0) return 65536;
  return Math.floor((intersection / union) * 65536);
}

function trim(str) {
  const set = getSet(str);
  const list = {};

  for (let item of set) {
    if (list[item]) list[item]++;
    else list[item] = 1;
  }

  return list;
}

function getSet(str) {
  const result = [];

  for (let i = 0; i < str.length - 1; i++) {
    if (
      str[i] >= "a" &&
      str[i] <= "z" &&
      str[i + 1] >= "a" &&
      str[i + 1] <= "z"
    )
      result.push(str.slice(i, i + 2));
  }

  return result;
}
