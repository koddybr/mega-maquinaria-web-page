import React from 'react';
import Icon1 from '../../images/im3.jpg'
import Icon2 from '../../images/im4.jpg'
import Icon3 from '../../images/im5.jpg'
 
import {ServicesContainer, 
    ServicesH1, 
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="repuestos">
        <ServicesH1>PRODUCTOS</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Usados</ServicesH2>
                <ServicesP>Contamos con el mas amplio inventario de equipos usados Cat de Sudamerica.si buscas calidad a buen precio,no te arriesgues con otros equipos, prefiere Usados Cat</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Repuestos Online</ServicesH2>
                <ServicesP>Ponemos a tu dispocicion una amplia gama de repuestos nuevos y remanufacturados Cat.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Arriendo</ServicesH2>
                <ServicesP>Resolvemos tus problemas con el mismo rendimiento de una maquina nueva, pero sin ataduras a largo plazo.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
         
    
  )
}

export default Services