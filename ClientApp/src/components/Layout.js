import React, { Component } from 'react';
import { Header } from "./Header";
import { NavMenu } from './NavMenu';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component.css";

export class Layout extends Component {
    static displayName = Layout.name;
   

  render () {
    return <>
        <Header/>
        <NavMenu />
        {this.props.children}
    </>
  }
}
