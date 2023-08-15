
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';

function App() {
 
  return (
    <div className ="c-body" style ={{height:"100vh",justifyContent:"space-"}}>
    <Header/>
    <Body />
    {/* <Footer /> */}
    </div>
  );
}

export default App;
