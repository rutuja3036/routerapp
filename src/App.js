import {BrowserRouter} from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import About from "./pages/About";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return(
  <BrowserRouter basename = "/tutorial" >
    <div className="App">
  
<Header/>
    </div>
    <Route path ='/Home' component = {Home }/>
    <Route path ='/About'component = {About}/>
    <Route path = '/Profile'component = {Profile }/>
 </BrowserRouter>
  );
    
}

export default App;
