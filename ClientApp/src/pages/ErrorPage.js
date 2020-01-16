import React from 'react';
import { withRouter } from 'react-router-dom';
import { ScoreContext } from '../services/ScoreContext';
import ReactDOM from 'react-dom';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component.css";

export class ErrorPage extends React.Component {

    state = {};

    render() {
        return <>
            <div className="black-background">
                <div className="blue-panel">
                    <h1 className='display-2'>
                        I'm sorry, that response was not in the form of a question.  
                    </h1>
                </div>
            </div>             
        </>
    }
    
}
