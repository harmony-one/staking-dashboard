const externalShardsByKeys = keys => {
  const shards = []

  if (Array.isArray(keys)) {
    keys
      .map(e =>
        e[e.length - 1] >= 'a'
          ? (e.charCodeAt(e.length - 1) - 87) % 4
          : parseInt(e[e.length - 1]) % 4
      )
      .forEach(shard => {
        const key = Number(shard)

        const external = shards[key] ? shards[key].external + 1 : 1

        shards[key] = { external, total: 170 + external }
      })
  }

  return shards
}

module.exports = {
  externalShardsByKeys
}
