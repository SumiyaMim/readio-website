import { Outlet } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <Home/>
     <Outlet></Outlet>
    </>
  )
}

export default App
