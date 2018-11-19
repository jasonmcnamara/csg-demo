import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Front from './Components/Front/Front';
import Firstslides from './Components/Firstslides/Firstslides';
import Socials from './Components/Socials/Socials';
import SecondBackground from './Components/SecondBackground/SecondBackground';


class App extends Component {

  render() {
    return (
      <div>
      <div className="App">
      </div>
          <Navbar />
          <Front />
          <Socials />
          <Firstslides />
          <SecondBackground />
      </div>
    );
  }
}

export default App;
