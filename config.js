module.exports = {
  contractDExAddrs: [
    {
      addr: "0x9fad94a68efac5d15d25ccc413aede563f23095a",
      info: "Deployed 07/26/2018"
    },
    {
      addr: "0x0def463933c4e286c79f517d7aa56c43bc25323b",
      info: "Deployed 07/24/2018"
    },
    {
      addr: "0x51ba4d11f6ed41748f8ebcb1890efb6d3e369f59",
      info: "Deployed 04/16/2018"
    }
  ],
  ethTestnet: true,
  port: "9000",
  ethRPC: "https://testnet.matic.network",
  dbPath:
    "mongodb://karachaindemo:testdemo123@ds147589.mlab.com:47589/dex-karachain",
  etherscanUrl: "http://ropsten.etherscan.io",
  etherscanAPI: "http://ropsten.etherscan.io",
  proxyAPI: "http://localhost:9000",
  etherscanAPIKey: "T1GSYD4D3NEAH44VQ34VHNDR9P316J9E7D",
  tokens: [
    {
      addr: "0x0000000000000000000000000000000000000000",
      name: "ETH",
      decimals: 18
    },
    {
      addr: "0x54477a3abc9355711bce1c7f150e9129090dcdce",
      name: "VAIB",
      decimals: 18
    },
    // {
    //   addr: "0x61d43db420fbdad90476887c30df9e4ec39be7a0",
    //   name: "MTX",
    //   decimals: 18
    // },
    // {
    //   addr: "0x343461c74133e3fa476dbbc614a87473270a226c",
    //   name: "MTX",
    //   decimals: 18
    // },
    {
      addr: "0xbdb2e5e880f4ac4bfee2cc8c371020f7ca68b549",
      name: "XLM",
      decimals: 18
    }
  ],
  defaultPair: { token: "VAIB", base: "ETH" },
  pairs: [
    { token: "VAIB", base: "ETH" },
    { token: "MTX", base: "ETH" },
    { token: "XLM", base: "ETH" }
  ],
  dExContractABI: [
    {
      constant: false,
      inputs: [
        {
          name: "tokenGet",
          type: "address"
        },
        {
          name: "amountGet",
          type: "uint256"
        },
        {
          name: "tokenGive",
          type: "address"
        },
        {
          name: "amountGive",
          type: "uint256"
        },
        {
          name: "expires",
          type: "uint256"
        },
        {
          name: "nonce",
          type: "uint256"
        },
        {
          name: "user",
          type: "address"
        },
        {
          name: "v",
          type: "uint8"
        },
        {
          name: "r",
          type: "bytes32"
        },
        {
          name: "s",
          type: "bytes32"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      name: "trade",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "tokenGet",
          type: "address"
        },
        {
          name: "amountGet",
          type: "uint256"
        },
        {
          name: "tokenGive",
          type: "address"
        },
        {
          name: "amountGive",
          type: "uint256"
        },
        {
          name: "expires",
          type: "uint256"
        },
        {
          name: "nonce",
          type: "uint256"
        }
      ],
      name: "order",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        },
        {
          name: "",
          type: "bytes32"
        }
      ],
      name: "orderFills",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "tokenGet",
          type: "address"
        },
        {
          name: "amountGet",
          type: "uint256"
        },
        {
          name: "tokenGive",
          type: "address"
        },
        {
          name: "amountGive",
          type: "uint256"
        },
        {
          name: "expires",
          type: "uint256"
        },
        {
          name: "nonce",
          type: "uint256"
        },
        {
          name: "v",
          type: "uint8"
        },
        {
          name: "r",
          type: "bytes32"
        },
        {
          name: "s",
          type: "bytes32"
        }
      ],
      name: "cancelOrder",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "amount",
          type: "uint256"
        }
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "token",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      name: "depositToken",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "tokenGet",
          type: "address"
        },
        {
          name: "amountGet",
          type: "uint256"
        },
        {
          name: "tokenGive",
          type: "address"
        },
        {
          name: "amountGive",
          type: "uint256"
        },
        {
          name: "expires",
          type: "uint256"
        },
        {
          name: "nonce",
          type: "uint256"
        },
        {
          name: "user",
          type: "address"
        },
        {
          name: "v",
          type: "uint8"
        },
        {
          name: "r",
          type: "bytes32"
        },
        {
          name: "s",
          type: "bytes32"
        }
      ],
      name: "amountFilled",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        },
        {
          name: "",
          type: "address"
        }
      ],
      name: "tokens",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "feeMake_",
          type: "uint256"
        }
      ],
      name: "changeFeeMake",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "feeMake",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "feeRebate_",
          type: "uint256"
        }
      ],
      name: "changeFeeRebate",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "feeAccount",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "tokenGet",
          type: "address"
        },
        {
          name: "amountGet",
          type: "uint256"
        },
        {
          name: "tokenGive",
          type: "address"
        },
        {
          name: "amountGive",
          type: "uint256"
        },
        {
          name: "expires",
          type: "uint256"
        },
        {
          name: "nonce",
          type: "uint256"
        },
        {
          name: "user",
          type: "address"
        },
        {
          name: "v",
          type: "uint8"
        },
        {
          name: "r",
          type: "bytes32"
        },
        {
          name: "s",
          type: "bytes32"
        },
        {
          name: "amount",
          type: "uint256"
        },
        {
          name: "sender",
          type: "address"
        }
      ],
      name: "testTrade",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "feeAccount_",
          type: "address"
        }
      ],
      name: "changeFeeAccount",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "feeRebate",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "feeTake_",
          type: "uint256"
        }
      ],
      name: "changeFeeTake",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "admin_",
          type: "address"
        }
      ],
      name: "changeAdmin",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "token",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      name: "withdrawToken",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        },
        {
          name: "",
          type: "bytes32"
        }
      ],
      name: "orders",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "feeTake",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "deposit",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "accountLevelsAddr_",
          type: "address"
        }
      ],
      name: "changeAccountLevelsAddr",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "accountLevelsAddr",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "token",
          type: "address"
        },
        {
          name: "user",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "tokenGet",
          type: "address"
        },
        {
          name: "amountGet",
          type: "uint256"
        },
        {
          name: "tokenGive",
          type: "address"
        },
        {
          name: "amountGive",
          type: "uint256"
        },
        {
          name: "expires",
          type: "uint256"
        },
        {
          name: "nonce",
          type: "uint256"
        },
        {
          name: "user",
          type: "address"
        },
        {
          name: "v",
          type: "uint8"
        },
        {
          name: "r",
          type: "bytes32"
        },
        {
          name: "s",
          type: "bytes32"
        }
      ],
      name: "availableVolume",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "admin_",
          type: "address"
        },
        {
          name: "feeAccount_",
          type: "address"
        },
        {
          name: "accountLevelsAddr_",
          type: "address"
        },
        {
          name: "feeMake_",
          type: "uint256"
        },
        {
          name: "feeTake_",
          type: "uint256"
        },
        {
          name: "feeRebate_",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      payable: false,
      stateMutability: "nonpayable",
      type: "fallback"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "tokenGet",
          type: "address"
        },
        {
          indexed: false,
          name: "amountGet",
          type: "uint256"
        },
        {
          indexed: false,
          name: "tokenGive",
          type: "address"
        },
        {
          indexed: false,
          name: "amountGive",
          type: "uint256"
        },
        {
          indexed: false,
          name: "expires",
          type: "uint256"
        },
        {
          indexed: false,
          name: "nonce",
          type: "uint256"
        },
        {
          indexed: false,
          name: "user",
          type: "address"
        }
      ],
      name: "Order",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "tokenGet",
          type: "address"
        },
        {
          indexed: false,
          name: "amountGet",
          type: "uint256"
        },
        {
          indexed: false,
          name: "tokenGive",
          type: "address"
        },
        {
          indexed: false,
          name: "amountGive",
          type: "uint256"
        },
        {
          indexed: false,
          name: "expires",
          type: "uint256"
        },
        {
          indexed: false,
          name: "nonce",
          type: "uint256"
        },
        {
          indexed: false,
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          name: "v",
          type: "uint8"
        },
        {
          indexed: false,
          name: "r",
          type: "bytes32"
        },
        {
          indexed: false,
          name: "s",
          type: "bytes32"
        }
      ],
      name: "Cancel",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "tokenGet",
          type: "address"
        },
        {
          indexed: false,
          name: "amountGet",
          type: "uint256"
        },
        {
          indexed: false,
          name: "tokenGive",
          type: "address"
        },
        {
          indexed: false,
          name: "amountGive",
          type: "uint256"
        },
        {
          indexed: false,
          name: "get",
          type: "address"
        },
        {
          indexed: false,
          name: "give",
          type: "address"
        }
      ],
      name: "Trade",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "token",
          type: "address"
        },
        {
          indexed: false,
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          name: "amount",
          type: "uint256"
        },
        {
          indexed: false,
          name: "balance",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "token",
          type: "address"
        },
        {
          indexed: false,
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          name: "amount",
          type: "uint256"
        },
        {
          indexed: false,
          name: "balance",
          type: "uint256"
        }
      ],
      name: "Withdraw",
      type: "event"
    }
  ]
};
