import React from "react";
import {  useState } from "react";
import {Reset} from 'styled-reset'
import styled, {createGlobalStyle} from 'styled-components'
import Header from "./components/header/Header";
import QuestionsPage from "./components/question/QuestionsPage";
import AskPage from "./components/ask/AskPage";
import LoginPage from "./components/LoginPage";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import SignupPage from "./components/SignupPage";
import GlobalStyles from "./components/AllStyles";
import UserContext from "./components/context/UserContext";




function App() {
 
  const [user, setUser] = useState(null);
  return (
    <div>
      <Reset/>
      <GlobalStyles/>
      

      <Router>
        <UserContext.Provider value={{user}}>
          <Header/>
          <Routes>
            <Route path="/ask" element={<AskPage/>} />
            <Route path="/" element={<QuestionsPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
          </Routes>
        </UserContext.Provider>

    
      </Router>

      
     
   </div>
   
  );
}

export default App;
