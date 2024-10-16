import { Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Home/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
