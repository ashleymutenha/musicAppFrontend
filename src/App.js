
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
 
  return (
  
    <div>
    <Header/>
    <div className ="c-body" style ={{height:"100vh",}}>
    <Content  />
    </div>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
