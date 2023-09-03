
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Welcome from './components/Welcome';
function App() {
 
  return (
    // <div>
    // <Header/>
    // <div className ="c-body" style ={{height:"100vh",justifyContent:"space-"}}>
    
    // <Body />
    // {/* <Footer /> */}
    // </div>
    // </div>
    <div>
    <Header/>
    <div className ="c-body" style ={{height:"100vh"}}>
    <Welcome/>
    </div>
    </div>
  );
}

export default App;
