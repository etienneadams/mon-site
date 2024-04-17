// MobileContext.js
import React, { createContext, useContext, FC, ReactNode, useState, useEffect } from 'react';

interface MobileContextProps {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileContext = createContext<MobileContextProps | undefined>(undefined);

interface MobileProviderProps {
  children: ReactNode;
}

const MobileProvider: FC<MobileProviderProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerHeight > window.innerWidth);

    // Mettre à jour isMobile lors du redimensionnement de la fenêtre
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerHeight > window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

const useMobile = () => {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};

export { MobileProvider, useMobile };
