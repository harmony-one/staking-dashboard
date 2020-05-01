import { TNode } from "@/connectors/node"
import { Module } from "vuex"

const state = {
  parameters: {},
  loading: false,
  loaded: false,
  error: null
}

export default ({ node }: { node: TNode }): Module<typeof state, any> => ({
  state: JSON.parse(JSON.stringify(state)),
  actions: {
    signIn({ dispatch }) {
      // needed for bond denom for gas calculation
    },
  }
})
