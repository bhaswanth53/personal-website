import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Overlay from './Components/Overlay'
import Skills from './Components/Skills'
import Experience from './Components/Experience'

class App extends Component {
  render() {
    return (
      <div id="body">
        <Overlay />
        <Navbar />
        <Banner />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App