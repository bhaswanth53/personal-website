import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Projects from './Components/Projects'

class App extends Component {
  render() {
    return (
      <div id="body">
        <Navbar />
        <Banner />
        <About />
        <Projects />
      </div>
    )
  }
}

export default App