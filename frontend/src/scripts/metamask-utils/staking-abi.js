export const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegatorAddress",
                "type": "address"
            }
        ],
        "name": "CollectRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegatorAddress",
                "type": "address"
            },
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
        "name": "Delegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "Migrate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegatorAddress",
                "type": "address"
            },
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
        "name": "Undelegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
