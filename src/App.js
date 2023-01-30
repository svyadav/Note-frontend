
import './App.css';
import Header from './components/Header.js/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MyNotes from './screens/MyNotes/MyNotes'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/SingleNote/SingleNote';
import { useState } from 'react';


const App=() =>{
  const [search,setSearch]=useState("")
  return (
    <div className="App">
      <BrowserRouter>
      <Header setSearch={setSearch}/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/createnote' element={<CreateNote/>}/>
      <Route path='/note/:id' element={<SingleNote/>}/>
      <Route path='/mynotes' element={<MyNotes search={search}/>}/>

      </Routes>
     
      
   
      <Footer />
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
