function solution(babbling) {
  const list = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let str of babbling) {
    for (let item of list) str = str.replace(item, "+");

    if ([...str].every((ch) => ch === "+")) count++;
  }

  return count;
}
