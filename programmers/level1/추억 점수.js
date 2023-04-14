function solution(name, yearning, photo) {
  const obj = {};

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  return photo.map((list) =>
    list.reduce((acc, cur) => {
      if (obj[cur]) acc += obj[cur];
      return acc;
    }, 0)
  );
}
