
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './Components/NabBar/NavBar';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Details from './Components/Details/Details';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path='/details/:id' element ={<Details/>} />
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
