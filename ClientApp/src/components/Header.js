import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./component.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component
{ 
    render() {
        return <>

            <div className="header">
                <Link to="/">
                <img className="jeparody-logo" src="https://fontmeme.com/permalink/200108/f0d07ae3217703af2ada400f65dec900.png" alt="jeopardy-font" border="0" />
                </Link>
            </div>
            <div className="yellow-band">
            </div>

        </>
    }
}
