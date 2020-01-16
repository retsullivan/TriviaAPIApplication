import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component.css";


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return <>
        <div className="my-container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="jeparody-home-card"> 
                        <Link to={'/triviaquestions'} className="btn home-button">
                            Play Now
                        </Link>    
                    </div>  
                </div>
                <div className="col-sm-4">
                    <div className="jeparody-home-card">
                        <Link to={'/stats'} className="btn home-button">
                            Stats
                        </Link>

                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="jeparody-home-card">
                        {/* <Link to={'/selectcategories'} className="btn btn-outline detail-button select-button"> Select Categories </Link> */}
                        <div className="btn home-button"> Select Categories </div>  
                    </div>
                </div>
                
            </div>
        </div>

     </>
  }
}
