import React, { Component } from 'react';
import '../styles/Header.css';
import $ from 'jquery';
// import '../../node_modules/bootstrap/dist/js/bootstrap.js';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <p className="p">BUILDING <span style={{color:'tomato'}}>PEOPLE</span> TOGETHER</p>
                <img className="p" src="/teachablelogo.png" />
                <p className="p">WE RISE BY <span style={{color:'tomato'}}>LIFTING</span> OTHERS</p>
            </div>
            
        );
    }
}

export default Header;