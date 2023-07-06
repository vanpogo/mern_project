import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/home/Home';
import RootAuth from "./components/auth/rootAuth/RootAuthComponent.jsx";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './redux/slices/auth/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
  },[])

  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path = "/register" element ={<RootAuth/>}/>
      <Route path = "/login" element ={<RootAuth/>}/>
    </Routes>
  );
}

export default App;
