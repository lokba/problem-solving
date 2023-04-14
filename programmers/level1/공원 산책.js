function solution(park, routes) {
  const COL = park.length;
  const ROW = park[0].length;
  let start = [-1, -1];

  for (let i = 0; i < COL; i++) {
    if (park[i].includes("S")) {
      start = [i, park[i].indexOf("S")];
      break;
    }
  }

  const TABLE = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  for (let route of routes) {
    const [direction, count] = route.split(" ");
    let [xpos, ypos] = start;
    let check = false;

    for (let i = 0; i < Number(count); i++) {
      const [dx, dy] = TABLE[direction];

      xpos += dx;
      ypos += dy;

      if (
        xpos < 0 ||
        ypos < 0 ||
        xpos > COL - 1 ||
        ypos > ROW - 1 ||
        park[xpos][ypos] === "X"
      ) {
        check = true;
        break;
      }
    }

    if (check === false) start = [xpos, ypos];
  }

  return start;
}
