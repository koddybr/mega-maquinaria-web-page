import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink} from './NavbarElements'
import img from '../../images/logo.png'



const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
             <NavLogo src={img} alt='MEGA MAQUINARIA' />
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='inicio'>Inicio</NavLinks>
=               </NavItem>
                <NavItem>
                    <NavLinks to='services'>Servicios</NavLinks>
=               </NavItem>
                <NavItem>
                    <NavLinks to='repuestos'>Productos</NavLinks>
=               </NavItem>
                <NavItem>
                    <NavLinks to='empresa'>Empresa</NavLinks>
=               </NavItem>
                <NavItem>
                    <NavLinks to='contact'>Contáctos</NavLinks>
=               </NavItem>
            </NavMenu>
              <NavBtn>
                  <NavBtnLink to=''>+591 2 2225581</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar