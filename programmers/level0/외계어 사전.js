function solution(spell, dic) {
  const obj = {};

  for (let str of spell) obj[str] = 1;

  for (let str of dic) {
    const set = new Set();

    for (let ch of str) {
      if (obj[ch]) set.add(ch);
    }

    if (set.size === spell.length) return 1;
  }

  return 2;
}
