import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  252: {
    Parimutuel: {
      address: "0xd52CED08f55496304E0dBD1B54111c86DFA8abcd",
      abi: [
        {
          type: "constructor",
          name: "",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "error",
          name: "AmountMustBeGreaterThanZero",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "FundingRateNotDue",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "InsufficientBalance",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "InsufficientMargin",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "InvalidLeverage",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "NoActiveLong",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "NoActiveShort",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "NotCloseableAtLoss",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "NotCloseableAtProfit",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "NotLiquidatable",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "PositionAlreadyOpened",
          inputs: [],
          outputs: [],
        },
        {
          type: "error",
          name: "TransferFailed",
          inputs: [],
          outputs: [],
        },
        {
          type: "event",
          name: "Deposit",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint256",
              name: "amount",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "LongClosedAtLoss",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "LongClosedAtProfit",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "LongFundingPaid",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "LongLiquidated",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "MarginAddedLong",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "MarginAddedShort",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "OpenLong",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "OpenShort",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "ShortClosedAtLoss",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "ShortClosedAtProfit",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "ShortFundingPaid",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "ShortLiquidated",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint8",
              name: "direction",
              indexed: false,
              internalType: "enum Parimutuel.Direction",
            },
            {
              type: "bool",
              name: "active",
              indexed: false,
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              indexed: false,
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdraw",
          inputs: [
            {
              type: "address",
              name: "user",
              indexed: true,
              internalType: "address",
            },
            {
              type: "uint256",
              name: "amount",
              indexed: false,
              internalType: "uint256",
            },
          ],
          outputs: [],
          anonymous: false,
        },
        {
          type: "function",
          name: "FUNDING_INTERVAL",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "FUNDING_PERIODS",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MAX_LEVERAGE",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MIN_LEVERAGE",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MIN_MARGIN",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "PRECISION",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "addMarginLong",
          inputs: [
            {
              type: "uint256",
              name: "amount",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addMarginShort",
          inputs: [
            {
              type: "uint256",
              name: "amount",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addSimulatedLong",
          inputs: [
            {
              type: "address",
              name: "user",
              internalType: "address",
            },
            {
              type: "uint256",
              name: "_margin",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "_leverage",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addSimulatedShort",
          inputs: [
            {
              type: "address",
              name: "user",
              internalType: "address",
            },
            {
              type: "uint256",
              name: "_margin",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "_leverage",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "admin",
          inputs: [],
          outputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balance",
          inputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "closeLong",
          inputs: [],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "closeLongLoss",
          inputs: [],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "closeLongProfit",
          inputs: [],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "closeShort",
          inputs: [],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "closeShortLoss",
          inputs: [],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "closeShortProfit",
          inputs: [],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "currentPrice",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "faucet",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "faucetHistory",
          inputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "fundingRateLong",
          inputs: [
            {
              type: "address",
              name: "user",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "fundingRateShort",
          inputs: [
            {
              type: "address",
              name: "user",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "liquidateLong",
          inputs: [
            {
              type: "address",
              name: "user",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "liquidateShort",
          inputs: [
            {
              type: "address",
              name: "user",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "longProfits",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "longShares",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "longTokens",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "longs",
          inputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "bool",
              name: "active",
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "openLong",
          inputs: [
            {
              type: "uint256",
              name: "margin",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "openShort",
          inputs: [
            {
              type: "uint256",
              name: "margin",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              type: "tuple",
              name: "",
              components: [
                {
                  type: "bool",
                  name: "active",
                  internalType: "bool",
                },
                {
                  type: "uint256",
                  name: "margin",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "leverage",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "tokens",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "entry",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "liquidation",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "profit",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "shares",
                  internalType: "uint256",
                },
                {
                  type: "uint256",
                  name: "funding",
                  internalType: "uint256",
                },
              ],
              internalType: "struct Parimutuel.Position",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "priceOracle",
          inputs: [],
          outputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "shortProfits",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "shortShares",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "shortTokens",
          inputs: [],
          outputs: [
            {
              type: "uint256",
              name: "",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "shorts",
          inputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
          outputs: [
            {
              type: "bool",
              name: "active",
              internalType: "bool",
            },
            {
              type: "uint256",
              name: "margin",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "leverage",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "tokens",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "entry",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "liquidation",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "profit",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "shares",
              internalType: "uint256",
            },
            {
              type: "uint256",
              name: "funding",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
