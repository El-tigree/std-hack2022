import React, { Component } from 'react';
import './App.css';
import {
  ActionCard,
  Features4x1,
  HeroLayout2,
  MarketingFooter,
  NavBar
} from './ui-components';

function App() {
  return (

    <div className='App'>
      <NavBar width={"100vw"}
        overrides= {{"Dashboard": {title : "Te"} }}/>
      <HeroLayout2 width={"100vw"}>
        <ActionCard></ActionCard>
      </HeroLayout2>
      <Features4x1 width={"100vw"}></Features4x1>
      <MarketingFooter width={"100vw"}></MarketingFooter>
    </div>
  );
}

export default App;
