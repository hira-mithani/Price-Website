
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import {HeroSection} from './components/HeroSection/HeroSection'

function App() {
  return (
    <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/herosection' element={<HeroSection />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 
 