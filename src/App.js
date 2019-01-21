import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Slidenav from './Components/Slidenav/Slidenav';
import Front from './Components/Front/Front';
import Firstslides from './Components/Firstslides/Firstslides';
import Socials from './Components/Socials/Socials';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';


class App extends Component {

  render() {
    return (
      <div>
      <div className="App">
      </div>
          <Navbar >
          <Slidenav />
          </Navbar>
          <Front />
          <Socials />
          <Firstslides />
          <Services />
          <Products />
      </div>
    );
  }
}

export default App;
