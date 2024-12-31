import React from 'react';
import { useWeb3Connection } from '../../hooks/useWeb3Connection';
import { Wifi, WifiOff } from 'lucide-react';

export function ConnectionStatus() {
  const { isOnline, error } = useWeb3Connection();

  if (!isOnline || error) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
        <WifiOff className="h-5 w-5" />
        <span>{error || 'Connection lost'}</span>
      </div>
    );
  }

  return null;
}