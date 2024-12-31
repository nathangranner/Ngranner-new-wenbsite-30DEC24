import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { WEB3_CONFIG } from './constants';
import { chains } from './chains';

export const { connectors } = getDefaultWallets({
  appName: WEB3_CONFIG.APP_NAME,
  projectId: WEB3_CONFIG.WALLET_CONNECT_PROJECT_ID,
  chains
});