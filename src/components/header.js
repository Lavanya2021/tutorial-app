import React, { Component } from 'react';
import logo from '../assets/bg.png';

export class Header extends Component {    
    
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={logo} alt="image"></img>
                    <h3>Hello Lavanya!!! Happy coding:)</h3>
                </div>
            </header>
        )
    }

}

export default Header;