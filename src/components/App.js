import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Pluses from './Pluses';
import Products from './products/Products';
import Exclusive from './Exclusive';
import GoldenSewing from './GoldenSewing';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Navigation />
      <Header />
      <Pluses />
      <Products />
      <Exclusive />
      <GoldenSewing />
      <Footer />
     </React.Fragment>
    );
  }
}

export default App;
