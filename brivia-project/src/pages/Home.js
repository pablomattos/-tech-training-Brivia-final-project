import '../styles/app/app.css'
import React from 'react'
import HeaderContent from '../components/HeaderContent'
import FirstContent from '../components/FirstContent';
import SecondContent from '../components/SecondContent';
import HomeContent from '../components/HomeContent';
import ThirdContent from '../components/ThirdContent'
import FooterContent from '../components/FooterContent';

const Home = () => {
  return (
    <div id="app-content">  
      <HeaderContent rota='/userslist' page='USUÁRIOS'></HeaderContent >      
      <FirstContent></FirstContent>
      <SecondContent></SecondContent>
      <HomeContent></HomeContent>
      <ThirdContent></ThirdContent>
      <FooterContent></FooterContent>
    </div>
  )
}

export default Home




