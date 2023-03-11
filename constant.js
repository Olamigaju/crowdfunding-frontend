export const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
export const abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "priceFeedAddr",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        stateMutability: "nonpayable",
        type: "fallback",
    },
    {
        inputs: [],
        name: "fund",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "funders",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "priceFeed",
        outputs: [
            {
                internalType: "contract AggregatorV3Interface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdrawn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]
