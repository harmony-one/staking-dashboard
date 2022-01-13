export const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "name": "directive",
                "type": "uint8",
                "internalType": "uint8",
                "indexed": false
            },
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "StakingPrecompileCalled",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "_collectRewards",
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "result",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "name": "_delegate",
        "stateMutability": "nonpayable",
        "type": "function",
        "inputs": [
            {
                "name": "validatorAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "result"
            }
        ]
    },
    {
        "stateMutability": "nonpayable",
        "name": "_undelegate",
        "inputs": [
            {
                "internalType": "address",
                "name": "validatorAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "result",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "success",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "type": "function",
        "inputs": [
            {
                "name": "validatorAddress",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "delegate",
        "stateMutability": "nonpayable"
    },
    {
        "outputs": [
            {
                "name": "success",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "name": "undelegate",
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "address",
                "name": "validatorAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "collectRewards",
        "outputs": [
            {
                "name": "success",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "inputs": []
    },
    {
        "name": "delegateMultipleAndCollectRewards",
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "name": "success",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "inputs": [
            {
                "name": "delegations",
                "components": [
                    {
                        "name": "validator",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "type": "tuple[]",
                "internalType": "struct StakingContract.Delegation[]"
            }
        ],
        "type": "function"
    },
    {
        "type": "function",
        "name": "undelegateDelegateAndCollectRewards",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "struct StakingContract.Undelegation",
                "name": "undelegation",
                "type": "tuple",
                "components": [
                    {
                        "name": "validator",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "internalType": "uint256",
                        "name": "amount"
                    }
                ]
            },
            {
                "name": "delegation",
                "type": "tuple",
                "internalType": "struct StakingContract.Delegation",
                "components": [
                    {
                        "type": "address",
                        "internalType": "address",
                        "name": "validator"
                    },
                    {
                        "type": "uint256",
                        "internalType": "uint256",
                        "name": "amount"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "success",
                "internalType": "bool"
            }
        ]
    },
    {
        "name": "multipleCollectRewards",
        "type": "function",
        "inputs": [
            {
                "name": "howMany",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "type": "bool",
                "name": "success",
                "internalType": "bool"
            }
        ]
    }
]
