import { initializeConnector } from '@web3-react/core'
import { BitKeep } from '@akkafinance/web3-react-bitkeep'

export const [bitkeep, hooks] = initializeConnector<BitKeep>((actions) => new BitKeep({ actions }))
