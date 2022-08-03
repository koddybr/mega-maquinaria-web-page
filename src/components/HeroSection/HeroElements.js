import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0,.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } 
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 57px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const HeroImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;

export const container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const NayButton = styled.button`
width: 35px;
height: 35px;
outline: none;
border: none;
background: none;
cursor: pointer;
padding: 0;
position: absolute;
top: 50%;
border-radius: 50%;
color: white;
box-shadow: 0px 4px 60px 20px rgba(3,3,3,0.9), inset 0 --3em rgba(3,3,3,0.5);
transform: translate(0, -50%);
${(props) => props.right === true ? css`right: 2%` : css`left: 2%`}
`