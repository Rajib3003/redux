import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";



function App() {

  



  return (
   <div className="container mx-auto max-w-5xl p-4 bg-white">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
