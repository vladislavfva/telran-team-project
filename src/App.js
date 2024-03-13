import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Outlet } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
     <HeaderNav />
      <Outlet>
        <div>
          <SalesPage />
        </div>
      </Outlet>
      <Footer />
    </div>
  );
}

export default App;
