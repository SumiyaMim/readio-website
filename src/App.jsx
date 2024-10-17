import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`flex flex-col min-h-screen ${isHome ? 'bg-white' : 'bg-zinc-800'}`}>
      {!isHome && <Navbar />}
      <div className="flex-grow bg-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
