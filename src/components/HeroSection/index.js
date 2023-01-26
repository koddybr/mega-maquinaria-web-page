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
    ImageContainer,
    Title,
    NavButton
 } from './HeroElements'
import img from '../../images/im1.jpg'

const HeroSection = ({config}) => {
    const [hover, setHover] = useState(false)
    const [ImageIndex, setimageindex] = useState(0)
    const onHover = () => {
        setHover(!hover)
    }
    
    const next = () => {
        console.log('sdsds')
        //setimageindex(state => state += 1);
        //if (ImageIndex === config.length -1) setimageindex(0)
    }

    const prev = () => {
        setimageindex(state => state -= 1);
        if (ImageIndex === 0) setimageindex(config.length -1);
    }

    return (
    <HeroContainer id='inicio'>
        <Container>
            <ImageContainer src={config[ImageIndex].image}/>
            <Title>
                {config[ImageIndex].title}
            </Title>
            <NavButton right onClick={ ()=>{ next() }}>AAAAA
                <i className = "fa fa-arrow-circle-right"></i>
            </NavButton>
            <NavButton onClick={prev}>BBBBB
                <i className = "fa fa-arrow-circle-right"></i>
            </NavButton>
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