import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container" data-theme="dark">
      <HeaderNav />
      <Outlet>
        <div></div>
      </Outlet>
      <Footer />
    </div>
  );
}

export default App;
