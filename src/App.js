import './App.css';
import React from 'react';
import { LandingPage } from './pages/Landing_page';
import { Header } from './pages/Header';

import { ThemeContext, themes } from './theme-context';
import { ThemedButton } from './themed-button'
import ThemeTogglerButton  from './theme-toggler-button';

const NameContext = React.createContext("Derrick");
export const OrderTotalContext = React.createContext({orderTotal: 0})
NameContext.displayName = "Derrick Nyarangi"
class App extends React.Component{

  render(){
    // return(<Greet/>)
    const pathName = window.location.pathname;
    console.log(window.location.pathname)
    
    if(pathName === '/'){
      return <LandingPage />
    }else{
      return (
        // <OrderTotalContext.Provider>
          <Header />
        //  </OrderTotalContext.Provider>
      )
    }
  }
}

function Content(){
  return(
    <ThemeTogglerButton />
  )
}

class Greet extends React.Component{
  
  toggleTheme = () =>{
    this.setState(state =>({
      theme: state.theme === themes.dark? themes.light : themes.dark
    }))
  }
  state = {theme: themes.dark, toggleTheme: this.toggleTheme}

  render(){
    return(
      <>
      <ThemeContext.Provider value={this.state}>
        <Content  />
      </ThemeContext.Provider>
      <section>
        <ThemedButton>Change Theme</ThemedButton>
      </section>
      </>
    )
    
  }
}

export default App;
