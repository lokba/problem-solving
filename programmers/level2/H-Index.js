function solution(citations) {
  let result = 0;

  for (let h = 1; ; h++) {
    const h번이상인용문 = citations.filter((citation) => citation >= h).length;

    if (h번이상인용문 >= h && citations.length - h번이상인용문 <= h) result = h;
    else break;
  }

  return result;
}
