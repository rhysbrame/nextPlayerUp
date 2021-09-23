import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  return (
    <AppContext.Provider value={{ teams, setTeams }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
