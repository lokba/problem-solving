function solution(files) {
  const list = [];

  for (let file of files) {
    const index = file.search(/[0-9]/);
    let lastIndex = getLastIndex(file, index);

    list.push([
      file.slice(0, index),
      file.slice(index, lastIndex + 1),
      file.slice(lastIndex + 1),
    ]);
  }

  const sorted = [...list].sort((a, b) => {
    if (a[0].toLowerCase() === b[0].toLowerCase()) {
      if (Number(a[1]) === Number(b[1])) return;
      return Number(a[1]) > Number(b[1]) ? 1 : -1;
    }
    return a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1;
  });

  return sorted.map((list) => list.join(""));
}

function getLastIndex(str, startIdx) {
  let lastIndex = startIdx;

  for (let i = startIdx; ; i++) {
    if (str[i] === " " || isNaN(Number(str[i]))) break;
    else lastIndex = i;
  }

  return lastIndex;
}
