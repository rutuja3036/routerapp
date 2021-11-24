import { useState } from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import About from "./pages/About";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

function App() {
   const [login, setLogin ] =useState(false);
  return(
  <BrowserRouter basename = "/tutorial" >
    <div className="App">

  
<Header/>
    </div>
    <button onclick={() => setLogin(!login)}>{login ? "log out" :"login"}
    </button>
    <Switch>
    <Route path ="/Home" component = {Home }/>
    <Route path ="/About"component = {About}/>
    <Route path = "/Profile">
      {login ? <Profile/> : <Redirect to ="/" />}
      </Route>

    <Route path ="/Post/:id"component ={Post} />
    <Route component = {NotFound} />
    </Switch>
 </BrowserRouter>
  );
    
}

export default App;
