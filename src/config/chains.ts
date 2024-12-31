import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { configureChains } from 'wagmi';

export const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
);