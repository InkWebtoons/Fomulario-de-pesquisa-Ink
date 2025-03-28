import { createContext, useContext, useState } from 'react';

interface RouteContextType {
  previousRoute: string;
  currentRoute: string;
  updateRoute: (newRoute: string) => void;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const [previousRoute, setPreviousRoute] = useState('');
  const [currentRoute, setCurrentRoute] = useState('');

  const updateRoute = (newRoute: string) => {
    setPreviousRoute(currentRoute);
    setCurrentRoute(newRoute);
  };

  return (
    <RouteContext.Provider value={{ previousRoute, currentRoute, updateRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (!context) throw new Error('useRoute must be used within RouteProvider');
  return context;
}; 