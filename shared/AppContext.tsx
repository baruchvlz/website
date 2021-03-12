import React, { createContext, useContext, useRef, useState } from "react";
import { NextComponentType } from "next";
import { navLinks } from "./constants";

interface AppContext {
  navigation: {
    current: string;
    change: (link: string) => void;
  }
}

const defaultContext: AppContext = {
  navigation: { current: "/", change: console.log }
};

const context = createContext<AppContext>(defaultContext);

export const useAppContext = () => useContext(context);
const AppProvider: NextComponentType = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState<string>(defaultContext.navigation.current);

  const changeCurrentView = (nextView: string) => {
    /** only change nav if it exists and it's not current view */
    if (navLinks.find(link => link.path === nextView)) {
      setCurrentView(thisView => thisView !== nextView ? nextView : thisView);

      if (divRef.current) {
        const nextViewEl = divRef.current.querySelector(`#${nextView}`);
        nextViewEl?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <context.Provider value={{
      navigation: { current: currentView, change: changeCurrentView }
    }}>
      <div ref={divRef}>{children}</div>
    </context.Provider>
  );
};


export { AppProvider };