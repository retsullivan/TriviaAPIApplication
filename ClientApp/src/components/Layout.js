import React, { Component } from 'react';
import { Header } from "./Header";
import {AnswerTracker} from "./AnswerTracker"
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
        
        <div setState={this.setState} >
               {!this.props.children &&
                <div className="row">
                    <div className="col-sm-8">
                        <div className="jeparody-home-card">
                            Insert Jeapordy Music Here
                        </div>
                    </div>
                </div>}
              {this.props.children}
        </div>

    </>
  }
}
