function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => (a > b ? -1 : 1));

  return emergency.map((item) => sorted.indexOf(item) + 1);
}
