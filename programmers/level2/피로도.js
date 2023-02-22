function solution(k, dungeons) {
  let maxCount = 0;

  function dfs(list, k, count) {
    if (count > maxCount) maxCount = count;

    for (let i = 0; i < list.length; i++) {
      const [최소필요피로도, 소모피로도] = list[i];

      if (k >= 최소필요피로도) {
        const slicing = [...list.slice(0, i), ...list.slice(i + 1)];
        dfs(slicing, k - 소모피로도, count + 1);
      }
    }
  }

  dfs(dungeons, k, 0);

  return maxCount;
}
