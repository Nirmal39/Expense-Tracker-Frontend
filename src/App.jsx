import { useState,useContext,useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from './Styles/globalStyles';
import LandingPage from './pages/LandingPage';
import { Toaster } from "react-hot-toast";
import { Context, server } from "./main";
import axios from "axios";
import Main from './pages/Main'
import { useGlobalContext } from './Context/globalContext';


function App() {

  const [modalIsOpenSign, setIsOpenSign] = useState(false);
  const [modalIsOpenLogin, setIsOpenLogin] = useState(false);

  const {setUsers,setIsAuthenticated,setLoading} = useGlobalContext();

  useEffect(()=>{
    setLoading(true)
    axios.get(`${server}/users/me`,{
      withCredentials:true
    }).then((res)=>{
      setUsers(res.data.user);
      localStorage.setItem('user', res.data)
      setIsAuthenticated(true);
      setLoading(false)
      
    }).catch((error)=>{
      setUsers({});
      localStorage.setItem('user', "")
      setIsAuthenticated(false);
      setLoading(false)
    })
  },[])

  function openModalSignup() {
    setIsOpenSign(true);
  }

  function closeModalSignup() {
    setIsOpenSign(false);
  }
  function openModalLogin() {
    setIsOpenLogin(true);
  }

  function closeModalLogin() {
    setIsOpenLogin(false);
  }


  return (
    <div className='App'>
      <GlobalStyle/>
        <Router>
          <Routes>
            <Route path="/login" element ={<LandingPage 
            isOpenLogin = {modalIsOpenLogin} 
            modalIsOpenSign = {modalIsOpenSign} 
            openModalSignup = {openModalSignup} 
            closeModalSignup={closeModalSignup} 
            openModalLogin={openModalLogin} 
            closeModalLogin={closeModalLogin}/>}/>
            <Route path="/" element ={<Main/>}/>
          </Routes>
          <Toaster></Toaster>
        </Router>
    </div>
  )
}

export default App
