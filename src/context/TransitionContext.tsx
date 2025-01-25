import React, { createContext, useContext, useState } from 'react';

type SectionType = 'home' | 'about' | 'contact' | 'ui' | 'hci' | 'code';

interface TransitionContextType {
  isTransitioning: boolean;
  selectedSection: SectionType;
  startTransition: (section: SectionType) => void;
  endTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedSection, setSelectedSection] = useState<SectionType>('home');

  const startTransition = (section: SectionType) => {
    setIsTransitioning(true);
    setSelectedSection(section);
  };

  const endTransition = () => {
    setIsTransitioning(false);
  };

  return (
    <TransitionContext.Provider value={{ 
      isTransitioning, 
      selectedSection, 
      startTransition, 
      endTransition 
    }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error('useTransition must be used within TransitionProvider');
  return context;
}; 