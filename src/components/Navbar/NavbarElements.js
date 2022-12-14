import { findByLabelText, getByPlaceholderText } from '@testing-library/react';
import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'


export const Nav = styled.nav `
    background: #000;
    height: 80px;
    margin-top: -80px;
    display: frex;
    justify-content: center;
    align-items: center;
    font-size: Irem;
    position: sticky;
    top: 0;
    z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px; 
    `; 

export const NavLogo = styled.img`
     width: 20%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`; 

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100px, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #ffc61f;

    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
     border-radius: 50px;
    background: #ffc61f;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;

    }

`