import { initializeConnector } from '@web3-react/core'
import { SafePal } from '@akkafinance/web3-react-safepal'

export const [safepal, hooks] = initializeConnector<SafePal>((actions) => new SafePal({ actions }))
