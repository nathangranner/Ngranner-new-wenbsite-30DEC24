import { createConfig } from 'wagmi';
import { chains, publicClient } from './chains';
import { connectors } from './wallets';

export const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient
});

export { chains };