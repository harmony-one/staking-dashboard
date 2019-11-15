module.exports = {
    deposit: {
      min_deposit: [
        {
          denom: "one",
          amount: "512000000"
        }
      ],
      max_deposit_period: "1209600000000000"
    },
    tallying: {
      quorum: "0.400000000000000000",
      threshold: "0.500000000000000000",
      veto: "0.334000000000000000"
    },
    voting: {
      voting_period: "1209600000000000"
    }
};