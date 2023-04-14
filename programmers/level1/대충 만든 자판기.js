function solution(keymap, targets) {
  const obj = {};

  for (let list of keymap) {
    for (let i = 0; i < list.length; i++) {
      if (!obj[list[i]]) obj[list[i]] = i + 1;
      else {
        if (i + 1 < obj[list[i]]) obj[list[i]] = i + 1;
      }
    }
  }

  const result = [];

  for (let target of targets) {
    let sum = 0;
    for (let ch of target) {
      if (!obj[ch]) {
        sum = -1;
        break;
      }
      sum += obj[ch];
    }

    result.push(sum);
  }

  return result;
}
