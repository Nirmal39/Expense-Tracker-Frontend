import React from 'react'
import { useState, useEffect } from 'react'
import { Nav, 
  NavbarContainer, 
  NavIcon, 
  NavLogo, 
  MobileIcon, 
  NavItem,
  NavLinks,
  NavMenu, 
  NavBtnLink, 
  NavItemBtn
} from '../Styles/NavBar_elements'
import { FaBars , FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Button } from '../Styles/globalStyles';



function NavBar(props) {

  const [click, setClick] = useState(false);
  const [button,setButton] = useState(false)

  const handleClick = ()=> setClick(!click);

  const Showbutton = ()=> {
    if(window.innerWidth <= 960){
      setButton(false)
    }
    else{
      setButton(true)
    }

  }

  useEffect(()=>{
    Showbutton()
  },[])

  window.addEventListener('resize', Showbutton)

  return (
    <>
    <IconContext.Provider value={{color:"#fff"}}>
      <Nav onClick={props.clickMOdals} style={props.isOpenLogin || props.modalIsOpenSign ? {opacity : "0.58"}: {opacity : "1"}}>
          <NavbarContainer>
              <NavLogo to='/'>
                  <NavIcon/>
                  Xpenso
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                 {click ? <FaTimes/>: <FaBars/>}
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click} >
                <NavItem>
                  <NavLinks to='/'>
                    About Us
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='/'>
                    Contact us
                  </NavLinks>
                </NavItem>
                <NavItemBtn>
                  {button ? 
                    (<NavBtnLink to='/'>
                    <Button onClick={props.openModalLogin} primary>Log In</Button>
                  </NavBtnLink>):
                  (<NavBtnLink to='/'>
                  <Button onClick={props.openModalLogin} fontBig primary>Log In</Button>
                  </NavBtnLink>)}
                </NavItemBtn>
              </NavMenu>
          </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default NavBar