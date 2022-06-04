import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import app from "./Firebase/firebase"
import {  getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

function App() {
  const[isUserSignedIn,setIsUserSignedIn] = useState(false);
  const authentication = getAuth(app);
  onAuthStateChanged(authentication,(user)=>{
    if(user){
      return setIsUserSignedIn(true);
    }
      return setIsUserSignedIn(false);
  })
  if(isUserSignedIn==false){
    return (
      <div className="App">
        <NavBar userStatus={isUserSignedIn}/> 
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <NavBar userStatus={isUserSignedIn}/>
        <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path="/"/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
