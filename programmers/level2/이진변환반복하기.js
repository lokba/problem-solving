function solution(s) {
  let [count, filtered] = [0, 0];

  while (s !== "1") {
    const length = s.match(/0/g)?.length ?? 0;

    s = (s.length - length).toString(2);
    filtered += length;
    count += 1;
  }

  return [count, filtered];
}
