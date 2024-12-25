// hooks/useColorScheme.ts
import { useEffect, useState } from 'react';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check the system's color scheme on mount
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set the initial color scheme based on the system preference
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    // Handler for when the system color scheme changes
    const handler = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
      console.log('Color scheme changed:', e.matches ? 'dark' : 'light'); // Debugging line
    };

    // Add event listener to track changes in color scheme
    mediaQuery.addEventListener('change', handler);

    // Clean up the event listener on unmount
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return colorScheme;
}
