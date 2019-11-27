import config from "src/config"
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
import HarmonyApp from './harmony-ledger';

export default () => {
  const emptyState = {}
  const state = {
    ...emptyState,
    externals: { config } // for testing
  }
  const mutations = {}

  const actions = {
    async connectLedgerApp({ state }) {
      const transport = await TransportWebUSB.create();
      const app = new HarmonyApp(transport);
      const response = await app.publicKey(false);
      return response.one_address.toString();
    }
  }
  return {
    state,
    mutations,
    actions
  }
}
