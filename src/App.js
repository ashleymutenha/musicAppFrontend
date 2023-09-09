
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content';
function App() {
 
  return (
  
    <div>
    <Header/>
    <div className ="c-body" style ={{height:"100vh"}}>
    <Content/>
    </div>
    </div>
  );
}

export default App;
