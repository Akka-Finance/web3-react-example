import BitkeepCard from '../components/connectorCards/BitkeepCard'
import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MathWalletCard from '../components/connectorCards/MathWalletCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import SafePalCard from '../components/connectorCards/SafePalCard'
import WalletConnectCard from '../components/connectorCards/WalletConnectCard'
import WalletConnectV2Card from '../components/connectorCards/WalletConnectV2Card'
import ProviderExample from '../components/ProviderExample'

export default function Home() {

  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
        <BitkeepCard />
        <SafePalCard />
        <MathWalletCard />
        <WalletConnectV2Card />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <NetworkCard />
        <GnosisSafeCard />
      </div>
    </>
  )
}
