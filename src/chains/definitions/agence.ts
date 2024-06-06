import { defineChain } from '../../utils/chain/defineChain.js'

export const agence = /*#__PURE__*/ defineChain({
  id: 787,
  name: 'Agence',
  network: 'agence',
  nativeCurrency: {
    name: 'Agence',
    symbol: 'HME',
    decimals: 2,
  },
  rpcUrls: {
    public: {
      http: ['https://takecopter.cloud.agence.network'],
      webSocket: ['wss://takecopter.cloud.agence.network'],
    },
    default: {
      http: ['https://takecopter.cloud.agence.network'],
      webSocket: ['wss://takecopter.cloud.agence.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Agence Blockscout',
      url: 'https://blockscout.takecopter.cloud.agence.network/',
      apiUrl: 'https://blockscout.takecopter.cloud.agence.network/api',
    },
  },
  testnet: false,
})
