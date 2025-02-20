import { http, createConfig } from '@wagmi/core'

const HARMONY_MAINNET = {
  id: 1666600000,
  name: 'Harmony Mainnet',
  network: 'harmony',
  nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.harmony.one'] },
    public: { http: ['https://api.harmony.one'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.harmony.one/' },
  },
}

export const config = createConfig({
  chains: [HARMONY_MAINNET],
  transports: {
    [HARMONY_MAINNET.id]: http(),
  },
})
