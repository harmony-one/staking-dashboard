export interface IAccount {
  sequence: string
  address: string
  public_key?: {
    value: string
    type: string
  }
  account_number: string
  coins: Array<{ denom: "one"; amount: string }>
}
