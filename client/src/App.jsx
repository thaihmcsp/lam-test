import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/Error/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import Test from './pages/Test/Test';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About/About';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='*' element={<Error/>}></Route>
        </Routes>   
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
