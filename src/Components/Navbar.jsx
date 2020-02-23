import React, { Component } from 'react'
import UIKIT from 'uikit'
import Logo from '../images/logo-small.png'
import Sidebar from './Sidebar'

class Navbar extends Component {
    render() {
        return (
            <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                <nav className="uk-navbar-container cus-nav" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <a className="uk-navbar-item uk-logo" href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="uk-navbar-right uk-visible@m">
                        <ul className="uk-navbar-nav">
                            <li><a href="#"><span>01.</span> About</a></li>
                            <li><a href="#"><span>02.</span> Work</a></li>
                            <li><a href="#"><span>03.</span> Contact</a></li>
                            <li className="resume"><a href="#"><span>Resume</span></a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right uk-hidden@m">
                        <ul className="uk-navbar-nav">
                            <li className="navicon"><a href="#"data-uk-toggle="target: #sidemenu"><i className="fas fa-bars"></i></a></li>
                        </ul>
                    </div>
                </nav>
                <Sidebar />
            </div>
        )
    }
}

export default Navbar