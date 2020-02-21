import React, { Component } from 'react'
import UIKIT from 'uikit'

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
                            <li><a href="#"><span>01.</span><br/> About</a></li>
                            <li><a href="#"><span>02.</span><br/> Work</a></li>
                            <li><a href="#"><span>03.</span><br/> Experience</a></li>
                            <li><a href="#"><span>04.</span><br/> Contact</a></li>
                            <li className="resume"><a href="#"><span>Resume</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar