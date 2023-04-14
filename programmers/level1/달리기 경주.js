function solution(players, callings) {
  const rating = {};

  for (let i = 0; i < players.length; i++) rating[players[i]] = i;

  for (let calling of callings) {
    const index = rating[calling];

    rating[players[index - 1]]++;
    rating[players[index]]--;

    players[index] = players[index - 1];
    players[index - 1] = calling;
  }

  return players;
}
