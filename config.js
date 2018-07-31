module.exports = {
  contractDExAddrs: [
    {
      addr: "0x71ac6b405b00eef22a88709ef11003e383d80a2a",
      info: "Deployed 07/31/2018"
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
      addr: "0x4a20f23b335127d7d5a06804f45d00180207771d",
      name: "REP",
      decimals: 18
    },
    {
      addr: "0xd52f642078fd05d22853c440026fdf8ab9e6e33e",
      name: "ZRX",
      decimals: 18
    },
    {
      addr: "0x046093929ebaa4887c795d065d53639a552f89c5",
      name: "OMG",
      decimals: 18
    },
    {
      addr: "0xec5589bb3bc66b492f41ee41f8516a152dc2855d",
      name: "BNB",
      decimals: 18
    },
    {
      addr: "0x654a4c978a3ca445fe9eea6cf5a50b31da492e93",
      name: "XLM",
      decimals: 18
    },
    {
      addr: "0x48b956f2a62471ffc25ed601f7fb94913fb0755b",
      name: "ZIL",
      decimals: 18
    }
  ],
  defaultPair: { token: "VAIB", base: "ETH" },
  pairs: [
    { token: "VAIB", base: "ETH" },
    { token: "REP", base: "ETH" },
    { token: "ZRX", base: "ETH" },
    { token: "OMG", base: "ETH" },
    { token: "BNB", base: "ETH" },
    { token: "XLM", base: "ETH" },
    { token: "ZIL", base: "ETH" }
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
