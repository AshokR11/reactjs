import React, { Component } from 'react';
import Header from './components/header';
import Banner from './components/Banner';
import SectionOne from './components/sectionOne';
import SectionTwo from './components/sectionTwo';
import Vid from './components/vid';
import Collective from './components/collective';
import ViewPort from './components/viewPort';
import Footer from './components/footer';
import './style/css/index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <SectionOne />
        <SectionTwo />
        <Vid />
        <Collective />
        <ViewPort />
        <Footer/>
      </div>
    );
  }
}

export default App;
