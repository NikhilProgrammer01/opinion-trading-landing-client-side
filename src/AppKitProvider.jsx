import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// Step 0: Setup query client
const queryClient = new QueryClient()

// Step 1: Use your Project ID
const projectId = '76be080bfda224932a81a352de31ff27'

// Step 2: Metadata (edit as needed)
const metadata = {
  name: 'Opinion Trading',
  description: 'Waitlist DApp',
  url: 'http://localhost:5173/', // Must match your domain
//   icons: ['https://yourdomain.com/icon.png'] // Optional
}

// Step 3: Choose supported networks
const networks = [mainnet, arbitrum]

// Step 4: Create the adapter
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
