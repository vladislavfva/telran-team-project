import { HeaderNav } from './components/HeaderNav/HeaderNav';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import useLocalStorage from 'use-local-storage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false);

  document
    .querySelector('body')
    .setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');

  return (
    <>
      <ScrollToTop />
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
    </>
  );
}

export default App;
