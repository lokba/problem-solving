function solution(n, words) {
  const table = new Map();
  let lastWord = null;
  let count = 0;

  for (let word of words) {
    count += 1;

    if (
      table.has(word) ||
      (lastWord !== null && lastWord[lastWord.length - 1] !== word[0])
    )
      return [count % n === 0 ? n : count % n, Math.ceil(count / n)];

    table.set(word, 1);
    lastWord = word;
  }

  return [0, 0];
}
