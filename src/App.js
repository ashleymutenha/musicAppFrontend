
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';

function App() {
 
  return (
    <div>
    <Header/>
    <div className ="c-body" style ={{height:"100vh",justifyContent:"space-"}}>
    
    <Body />
    {/* <Footer /> */}
    </div>
    </div>
  );
}

export default App;
