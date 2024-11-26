
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Navbar2 from './components/Navbar/Navbar2'
import Navbar3 from './components/Navbar/Navbar3'
// import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import { Outlet } from 'react-router'

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <Navbar/>
      <Navbar2/>
      <Navbar3/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
