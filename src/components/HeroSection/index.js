import React, {useState} from 'react';
import Video from '../../videos/camion.mp4';
import { Button } from '../ButtonElements';
import {  
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    HeroImg,
    Container,
    ImageContainer
 } from './HeroElements'
import img from '../../images/im1.jpg'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const [ImageIndex, setimageindex] = useState(0)
    const onHover = () => {
        setHover(!hover)
    }
    
    return (
    <HeroContainer id='inicio'>
        <Container>
            <imageContainer src={config[ImageIndex].image}/>
        </Container>
        <HeroContent>
            <HeroH1>MEGA MAQUINARIA BOLIVIA S.R.L.</HeroH1>
            <HeroP>
            Servicios Postventa y mucho más.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Conocer Más {hover ? <ArrowForward /> : <ArrowForward />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection