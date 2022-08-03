import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,
    FooterLinkWrapper, 
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Menu</FooterLinkTitle>
                            <FooterLink to="/signin">
                                Inicio
                            </FooterLink>
                            <FooterLink to="/signin">
                                Servicios
                            </FooterLink>
                            <FooterLink to="/signin">
                                Productos
                            </FooterLink>
                            <FooterLink to="/signin">
                                Empresa
                            </FooterLink>
                            <FooterLink to="/signin">
                                Contactos
                            </FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Productos</FooterLinkTitle>
                            <FooterLink to="/signin">
                                Producto 1
                            </FooterLink>
                            <FooterLink to="/signin">
                            Producto 2
                            </FooterLink>
                            <FooterLink to="/signin">
                            Producto 4
                            </FooterLink>
                            <FooterLink to="/signin">
                            Producto 5
                            </FooterLink>
                            <FooterLink to="/signin">
                            Producto 6
                            </FooterLink>
                            <FooterLink to="/signin">
                            Producto 7
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Servicios</FooterLinkTitle>
                            <FooterLink to="/signin">
                                Servicio 1
                            </FooterLink>
                            <FooterLink to="/signin">
                            Servicio 2
                            </FooterLink>
                            <FooterLink to="/signin">
                            Servicio 3
                            </FooterLink>
                            <FooterLink to="/signin">
                            Servicio 4
                            </FooterLink>
                            <FooterLink to="/signin">
                            Servicio 5
                            </FooterLink>
                            <FooterLink to="/signin">
                            Servicio 6
                            </FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Contacto Directo</FooterLinkTitle>
                            <FooterLink to="/signin">
                                65556002
                            </FooterLink>
                            <FooterLink to="/signin">
                                soporte@megamaquinari.com
                            </FooterLink>
                            <FooterLink to="/signin">
                                8:30-17:00
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Mega Maquinaria
                        </SocialLogo>
                        <WebSiteRights>
                            {new Date().getFullYear()} All rights reserverd
                          </WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer