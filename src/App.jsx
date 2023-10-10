import './App.css'
import Navigation from './components/Navigation/Navigation';
import ContactHeading from './components/ContactHeading/ContactHeading'
import HeroSection from './components/Hero/Hero'
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
      <Navigation/>
      {/* <HeroSection/> */}
      {/* <ContactHeading/> */}
      <Outlet />
    </>
  )
}

export default App
