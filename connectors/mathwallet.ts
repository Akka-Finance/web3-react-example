import { initializeConnector } from '@web3-react/core'
import { MathWallet } from '@akkafinance/web3-react-mathwallet'

export const [mathwallet, hooks] = initializeConnector<MathWallet>((actions) => new MathWallet({ actions }))
