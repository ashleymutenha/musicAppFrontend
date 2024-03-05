
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Body from './components/Body';
import Waves from './components/bodyComponents/Waves'
import Dots from './components/bodyComponents/Dots';
import Company from './components/pages/Company';
import {motion} from "framer-motion";
import Partnerships from './components/pages/Partnerships';
import Services from './components/pages/Services';

function App() {
 
  return (
  
    <div style ={{overflow:"hidden"}}>

<BrowserRouter  style ={{overflow:"hidden"}}>
      <Routes>
      <Route path="/" element={ <Body /> }/>
      <Route path="/company" element={ <Company/> }/>
     <Route path="/partnerships" element={ <Partnerships/>}/>

     <Route path="/services" element={ <Services/>}/>

      </Routes>
        </BrowserRouter>


        
  
     
  
    </div>
  );
}

export default App;
