import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="uk-flex-center" data-uk-grid>
                    <div className="uk-width-3-4@m">
                        <div className="uk-grid-match" data-uk-grid>
                            <div className="uk-width-1-2@m">
                                <h3 className="uk-heading-line about-head"><span><label>01.</label> About Me</span></h3>
                            </div>
                            <div className="uk-width-1-2@m"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About