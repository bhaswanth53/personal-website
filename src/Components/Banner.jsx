import React, { Component } from 'react'
import UIKIT from 'uikit'

class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <div className="uk-grid-match" data-uk-grid>
                    <div className="uk-width-1-6@m uk-visible@m">
                        <div className="right-bar">
                            <ul className="uk-nav uk-nav-default uk-position-bottom uk-position-fixed ">
                                <li><a href="https://www.facebook.com/bhaswanth.kumar.9" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://github.com/bhaswanth53" target="_blank"><i className="fab fa-github"></i></a></li>
                                <li><a href="https://codepen.io/bhaswanth_chiruthanuru" target="_blank"><i className="fab fa-codepen"></i></a></li>
                                <li><a href="https://www.instagram.com/its_me_man_of_attitude/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com/bhaswanth4?lang=en" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                <li className="line-li"><a href="#" className="line"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-3-4@m" data-uk-scrollspy="cls:uk-animation-fade">
                        <div className="banner-div">
                            <p className="hi">Hi, my name is</p>
                            <p className="h1-white">Bhaswanth Chiruthanuru</p>
                            <p className="h1-grey">I build things for the web.</p>
                            <p className="text">I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
                            <a href="#">
                                <button className="uk-button uk-button-large touch">Get In Touch</button>
                            </a>
                        </div>
                    </div>
                    <div className="uk-width-1-6@m uk-visible@m">
                        <div className="left-bar">
                            <ul className="uk-nav uk-nav-default  uk-position-bottom-right uk-position-fixed">
                                <li className="email"><a href="#">bhaswanthkumar6@gmail.com</a></li>
                                <li className="line-li"><a href="#" className="line"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner