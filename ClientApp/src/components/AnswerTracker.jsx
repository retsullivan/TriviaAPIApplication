import React from 'react';
import { withRouter } from 'react-router-dom';
import { ScoreContext } from '../services/ScoreContext';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component.css";


export class AnswerTracker extends React.Component {

    static contextType = ScoreContext;
    state = { score: this.context.getScore() };

    componentDidMount() {
        this.context.showScore();
    }

    componentDidUnmount() {
        this.context.hideScore();
    }


    render() {
        return <>
            <AnswerTracker />
            <div className="score-card">
                {
                    <div>
                        <div className="correct-square"> 
                            <h4>CORRECT</h4>
                            <div className="correct-count-style">
                                {this.context.getScore.correctCount}
                            </div>
                            </div>
                        <div className="incorrect-square"> 
                            <h4>INCORRECT</h4>
                            <div className="incorrect-count-style">
                                {this.context.getScore.incorrectCount}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    }

}

export default withRouter(AnswerTracker);
