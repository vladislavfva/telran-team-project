import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useState } from "react";
import useLocalStorage from "use-local-storage";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false)

  return (
    <div className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <div className="container">
        <HeaderNav
          isChecked={isDarkTheme}
          handleChange={() => setIsDarkTheme(!isDarkTheme)}
        />
        <Outlet>
          <div></div>
        </Outlet>
        <Footer />
      </div>
    </div>
  );
}

export default App;
