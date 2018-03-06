import React, { Component } from 'react';
import '../styles/StudentLinks.css';
import {Animated} from "react-animated-css";


class StudentLinks extends Component {
    render() {
        console.log(this.props.obj);
        return (
            <div>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div id="imgBounce">
                        <a href={this.props.obj.LinkedIn_link}><img src="/linkedin-logo.png" alt="Linkedin link" width="75" height="75" /></a>
                        <a href={this.props.obj.Github_link}><img src="/GitHub-logo.png" alt="Github link" width="75" height="75" /></a>
                        <a href={this.props.obj.hackerRank_link}><img src="/HackerRank-logo.png" alt="HackerRank link" width="75" height="75" /></a>
                        <a href={this.props.obj.CV_link}><img src="/CV-logo.png" alt="CV link" width="75" height="75" /></a>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default StudentLinks;
