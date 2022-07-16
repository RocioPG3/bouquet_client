import { createContext, useState } from 'react';
import "./App.css";
import Router from "./components/Router";

export const GlobalContext = createContext();

function App() {
  const [wineries, setWineries] = useState([]);
  const [idWinerie, setIdWinerie] = useState({ id: "" });

  return (
    <div className="App">
      {/* <Router /> */}
      <GlobalContext.Provider
        value={{
          wineries, setWineries, idWinerie, setIdWinerie
        }}>
        <Router />
      </GlobalContext.Provider>
      
    </div>
  );
}

export default App;
