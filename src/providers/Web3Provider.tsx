import React, { Suspense } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { ConnectionStatus } from '../components/Web3/ConnectionStatus';
import { Web3ErrorBoundary } from '../components/Web3/Web3ErrorBoundary';
import { wagmiConfig, chains } from '../config/web3Config';

function Web3Content({ children }: { children: React.ReactNode }) {
  return (
    <RainbowKitProvider chains={chains} modalSize="compact">
      {children}
      <ConnectionStatus />
    </RainbowKitProvider>
  );
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <Web3ErrorBoundary>
      <WagmiConfig config={wagmiConfig}>
        <Suspense fallback={null}>
          <Web3Content>{children}</Web3Content>
        </Suspense>
      </WagmiConfig>
    </Web3ErrorBoundary>
  );
}