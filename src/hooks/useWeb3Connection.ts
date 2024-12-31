import { useState, useEffect } from 'react';

interface ConnectionState {
  isOnline: boolean;
  isInitialized: boolean;
  error: string | null;
}

export function useWeb3Connection() {
  const [state, setState] = useState<ConnectionState>({
    isOnline: navigator.onLine,
    isInitialized: false,
    error: null
  });

  useEffect(() => {
    const handleOnline = () => {
      setState(prev => ({ ...prev, isOnline: true, error: null }));
    };

    const handleOffline = () => {
      setState(prev => ({
        ...prev,
        isOnline: false,
        error: 'No internet connection detected. Please check your connection and try again.'
      }));
    };

    const initialize = () => {
      setState(prev => ({ ...prev, isInitialized: true }));
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Initialize after a short delay to ensure proper state detection
    const initTimer = setTimeout(initialize, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(initTimer);
    };
  }, []);

  return state;
}