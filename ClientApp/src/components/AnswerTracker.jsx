import React from 'react';
import { withRouter } from 'react-router-dom';
import { ScoreContext } from '../services/ScoreContext';
import ReactDOM from 'react-dom';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component.css";


export class AnswerTracker extends React.Component {

    state = { };

    componentDidMount() {
        
    }
       
    render() {
        return <>
            <div id="score-card" className="score-card">                    
                {
                    <>  
                        {/*<h3> {this.props.user.userName}</h3>*/}
                        <div className="correct-square"> 
                            <div>CORRECT</div>
                            <div className="correct-count-style">
                               {this.props.user.correctCount || 0}
                            </div>
                        </div>
                        <div className="incorrect-square"> 
                            <div>INCORRECT</div>
                            <div className="incorrect-count-style">
                                {this.props.user.incorrectCount || 0}
                            </div>
                        </div>
                    </>
                }                
            </div>
 
        </>
    }
}

export default withRouter(AnswerTracker);
