
import './App.css';
import { useState } from 'react';

import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Alert from './Components/Alert';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
function App() {
  const [alert,setalert]=useState(null);
  const showAlert =(message)=>{
    setalert({
      msg:message                      
    })
    setTimeout(() => {
      setalert(null)
    },3500);

  }
  return (
    
    <>
    
    <Navbar/>
    <Alert alert={alert}/>
    <Home/>
    <About/>
    <Skills/>
    <Contact showalert={showAlert}/>
    <Footer/>
    
    
    </>
  );
}

export default App;
