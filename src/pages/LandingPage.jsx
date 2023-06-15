import React from 'react'
import Infosection from '../components/Infosection'
import NavBar from '../components/NavBar';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/globalContext';

function LandingPage(props) {

  const {isAuthenticated} =useGlobalContext();

  function handleCLickForModals(e){
    if(props.isOpenLogin){
        props.closeModalLogin();
    }else if(props.modalIsOpenSign){
        props.closeModalSignup();
    }
}

  if(isAuthenticated) return <Navigate to={'/'} />

  return (
    <>
    <NavBar clickMOdals={handleCLickForModals} openModalLogin={props.openModalLogin}  modalIsOpenSign = {props.modalIsOpenSign} isOpenLogin={props.isOpenLogin} />
    <Infosection 
    isOpenLogin= {props.isOpenLogin}
    modalIsOpenSign = {props.modalIsOpenSign}
    closeModalLogin={props.closeModalLogin} 
    openModalSignup = {props.openModalSignup} 
    openModalLogin={props.openModalLogin}  
    closeModalSignup={props.closeModalSignup}
    style={props.isOpenLogin || props.modalIsOpenSign ? {opacity : "0.2"}: {opacity : "1"}}/>
      </>
  )
}

export default LandingPage