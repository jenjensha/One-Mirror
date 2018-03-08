import React, { Component } from 'react';
import '../styles/RestartLinks.css'
class RestartLinks extends Component {
    render() {
        return (
            <div>
                <div className="links-title">
                    <div className="element">
                        <a href=""><img className="dashboard-link-icon" src="/RestartLinksLogos/Google-Calendar.png" alt="Google Calender"  /></a>
                        <p>Google Calendar</p>
                    </div>
                    <div className="element">
                        <a href=""><img className="dashboard-link-icon" src="/RestartLinksLogos/slack_2.png" alt="Slack" width="75" height="75" /></a>
                        <p>Slack</p>
                    </div>
                    <div className="element">
                        <a href="https://core.restart.network"><img className="dashboard-link-icon" src="/RestartLinksLogos/code-3.png" alt="Resatrt Curriculm" width="75" height="75" /></a>
                        <p>Curriculum</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestartLinks;
