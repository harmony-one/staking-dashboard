const externalShardsByKeys = keys => {
  const shards = {}

  if (Array.isArray(keys)) {
    keys
      .map(e =>
        e[e.length - 1] >= 'a'
          ? (e.charCodeAt(e.length - 1) - 87) % 4
          : parseInt(e[e.length - 1]) % 4
      )
      .forEach(shard => {
        const external = shards[shard] ? shards[shard].external + 1 : 1

        shards[shard] = { external, total: 170 + external }
      })
  }

  return shards
}

module.exports = {
  externalShardsByKeys
}
