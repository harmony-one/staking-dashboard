import BigNumber from 'bignumber.js';

export const isNotEmpty = obj => (obj ? !!Object.keys(obj).length : false);

export const bodyParams = (method: string, params?: string | number) => `{
      "jsonrpc": "2.0",
      "method": "${method}",
      "params": ${params ? `[${params}]` : '[]'},
      "id": 1
    }`;

export const bodyParams2 = (method: string, params?: string | number) => `{
      "jsonrpc": "2.0",
      "method": "${method}",
      "params": ${params ? `[${params}]` : '[]'},
      "id": 1
    }`;

export const ones = (number = 0) => {
  return new BigNumber(number).div(1e18).toNumber();
};

export const changePercentage = (current, prev) => {
  // ( current - prev ) / current * 100.0

  const diff = new BigNumber(current).minus(prev).toNumber();
  const prc = new BigNumber(current).times(100.0).toNumber();

  return new BigNumber(diff).div(prc).toNumber();
};

export const sortByParams = (array, sortProperty, sortOrder) =>
  array.sort((aV, bV) => {
    const a = aV[sortProperty];
    const b = bV[sortProperty];

    const sortFactor = sortOrder === 'desc' ? 1 : -1;

    if (!isNaN(a) && !isNaN(b)) {
      return Number(a) > Number(b) ? -sortFactor : sortFactor;
    }

    return a > b ? -sortFactor : sortFactor;
  });

export const externalShardsByKeys = keys => {
  const shards = [];

  if (Array.isArray(keys)) {
    keys
      .map(e =>
        e[e.length - 1] >= 'a'
          ? (e.charCodeAt(e.length - 1) - 87) % 4
          : parseInt(e[e.length - 1]) % 4
      )
      .forEach(shard => {
        const key = Number(shard);

        const external = shards[key] ? shards[key].external + 1 : 1;

        shards[key] = { external, total: 170 + external };
      });
  }

  return shards;
};

export const shuffle = (array: any[]) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
