import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient()

const projectId = import.meta.env.VITE_PROJECT_ID;
console.log(projectId,"init")

const metadata = {
  name: 'Trade Opinions',
  description: 'Waitlist DApp',
  url: 'https://opinion-trading-landing-client-side.vercel.app/', // Must match your domain
  icons: ['https://fav.farm/🦊']
}

const networks = [mainnet, arbitrum]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// Step 5: Initialize AppKit
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true
  }
})

// Step 6: Export as a wrapper
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
