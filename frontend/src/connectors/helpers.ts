export function convertWsArgs(args: any = {}) {
  for (const k in args) {
    const v = args[k]
    if (typeof v === `number`) {
      args[k] = String(v)
    } else if (Buffer.isBuffer(v)) {
      args[k] = `0x` + v.toString(`hex`)
    } else if (v instanceof Uint8Array) {
      args[k] = `0x` + Buffer.from(v).toString(`hex`)
    }
  }
  return args
}

export function getHost(url: string) {
  return url.startsWith(`http`) && url.indexOf(`//`) !== -1
    ? url.split(`//`)[1]
    : url
}
