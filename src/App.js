import React, { Component } from 'react';
import './App.css';
import {
  Features4x1,
  HeroLayout2,
  MarketingFooter,
  NavBar
} from './ui-components';

function App() {
  return (

    <div className='App'>
      <NavBar/>
      <HeroLayout2></HeroLayout2>
      <Features4x1></Features4x1>
      <MarketingFooter></MarketingFooter>
    </div>
    // <><NavBar /><div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div></>
  );
}

export default App;
