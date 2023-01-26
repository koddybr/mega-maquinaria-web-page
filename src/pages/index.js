import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree  } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SignIn from '../components/Signin';


const Home = () => {

  const config = [
    {
      title: 'image one',
      image: require('../images/im1.jpg')
    },
    {
      title: 'image two',
      image: require('../images/im2.jpg')
    }
  ]

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
    return (
    <>
       <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle} />
       <HeroSection config={config}/>
       <InfoSection {...homeObjOne}/>
       <InfoSection {...homeObjTwo}/>
       <Services />
       {/*<InfoSection {...homeObjThree}/>*/}
       <SignIn  />
       <Footer />

    </>
  );
};

export default Home

