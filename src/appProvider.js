import React, { useContext, useState } from "react";

const AppContext = React.createContext("");

// use AppProvider for saving global data(wallpaper, user name, ...)
export const AppProvider = ({ children }) => {
  const [wallpaper, setWallpaper] = useState("grey");

  return (
    <AppContext.Provider
      value={{
        wallpaper,
        setWallpaper,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
