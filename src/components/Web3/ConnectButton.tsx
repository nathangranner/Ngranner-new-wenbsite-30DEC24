import React from 'react';
import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';
import { useWeb3Connection } from '../../hooks/useWeb3Connection';

export function ConnectButton() {
  const { isOnline } = useWeb3Connection();

  if (!isOnline) {
    return (
      <button 
        disabled
        className="bg-gray-400 text-white px-4 py-2 rounded-lg font-['Open_Sans'] cursor-not-allowed"
      >
        Offline
      </button>
    );
  }

  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="bg-white text-black px-4 py-2 rounded-lg font-['Open_Sans'] hover:bg-gray-100 transition-colors"
                  >
                    Connect Wallet
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-4">
                  <button
                    onClick={openChainModal}
                    className="bg-white/10 text-white px-4 py-2 rounded-lg font-['Open_Sans'] hover:bg-white/20 transition-colors"
                  >
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    className="bg-white text-black px-4 py-2 rounded-lg font-['Open_Sans'] hover:bg-gray-100 transition-colors"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
}