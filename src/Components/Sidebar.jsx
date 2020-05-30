import React, { Component } from 'react'
import UIKIT from 'uikit'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Sidebar extends Component {
    render() {
        return(
            <div id="sidemenu" data-uk-offcanvas="flip: true; overlay: true">
                <div className="uk-offcanvas-bar">
                    <a className="uk-offcanvas-close uk-close">
                        <i className="fas fa-times"></i>
                    </a>
                    <div className="uk-text-center nav-div">
                        <ul className="uk-nav uk-nav-default">
                            <li><AnchorLink offset='100' href="#about-section"><span>01.</span><br/> About</AnchorLink></li>
                            <li><AnchorLink offset='100' href="#projects-section"><span>02.</span><br/> Work</AnchorLink></li>
                            <li><AnchorLink offset='100' href="#contact-section"><span>03.</span><br/> Contact</AnchorLink></li>
                            <li className="resume"><a href="https://sourcerer.io/bhaswanth53" target="_blank" rel="noopener noreferrer"><span>Sourcerer</span></a></li>
                            <li className="resume"><a href="/resume" target="_blank" rel="noopener noreferrer"><span>Resume</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar