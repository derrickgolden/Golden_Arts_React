import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { LandingPage } from './pages/Landing_page';
import { Header } from './pages/Header';

export const OrderTotalContext = React.createContext({orderTotal: 0})

class App extends React.Component{

  render(){ 
    return (
        <Header />
    )
  }
}

export const ScrollToTop = () =>{
  const {pathname} = useLocation()
  useEffect(()=>{
      document.documentElement.scrollTo({
          top: 0, left: 0, behavior: "instant",
      })
  },[pathname])
  return null
}

export default App;
