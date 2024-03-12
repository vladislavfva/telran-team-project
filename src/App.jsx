import { Outlet } from "react-router-dom";
import SalesPage from "./pages/SalesPage";

function App() {
  return <div className="container">
    <Outlet>
      <div>
        <SalesPage />
      </div>
    </Outlet>
  </div>;
}

export default App;
