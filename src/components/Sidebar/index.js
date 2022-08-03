  import React from 'react'
  import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute} from './SidebarElement';
  
  const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
             <SidebarMenu>
                <SidebarLink to='inicio' onClick={toggle}>Inicio</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Servicios</SidebarLink>
                <SidebarLink to='repuestos' onClick={toggle}>Productos</SidebarLink>
                <SidebarLink to='empresa' onClick={toggle}>Empresa</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contáctos</SidebarLink>
                {/*<SidebarLink to='signup' onClick={toggle}>+591 2 2225581</SidebarLink>*/}
             </SidebarMenu>
             <SideBtnWrap>
                 <SidebarRoute to=''>+591 2 2225581</SidebarRoute>
             </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
    )
  }
  
  export default Sidebar