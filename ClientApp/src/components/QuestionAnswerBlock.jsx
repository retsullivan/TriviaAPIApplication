import React from 'react';
import { withRouter } from 'react-router-dom';
import { ScoreContext } from '../services/ScoreContext';
import { AnswerTracker } from './AnswerTracker';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component.css";


export class QuestionAnswerBlock extends React.Component {

    static contextType = ScoreContext;

    state = {
        showAnswerBlock: false,
        showNextQuestionButton: false,
        userAnswer:"Incorrect"
    }

    componentDidUnmount() {
        this.context.hideScore();
    };


    allAnswers() {
        var allAnswers = [];

        if (this.props.question.type == "multiple") {
            for (var i = 0; i < 3; i++) {
                allAnswers.push(this.props.question.incorrect_answers[i]);
            }
            allAnswers.push(this.props.question.correct_answer);
            allAnswers.sort(() => Math.random() - 0.5);
        }
        else { allAnswers = ["False", "True"]; }

        return allAnswers;
    }


    checkAnswer(answer) {
        if (answer == this.props.question.correct_answer) {
            this.setState({ userAnswer: "Correct" })
            this.context.addCorrect();
        }
        else {
            this.context.addIncorrect();
        }
        this.setState({ showAnswerBlock:true })
    }

    closeAnswerBlock() { 
        this.setState({
            showAnswerBlock: false,
            showNextQuestionButton:true
        });
     
    }

    


    render() {
        return <>
            
            {this.state.showAnswerBlock &&
                <div className="answer-block">
                    <div className="answer-card-body">
                        <div className="card-title">
                            <h1 className={this.state.userAnswer}> {this.state.userAnswer} </h1>
                        </div>
                        <div className="card-text">
                            <h3> The answer is {`${this.props.question.correct_answer}`}</h3>
                        </div>
                        <button className="btn btn-primary" onClick={e => this.closeAnswerBlock()}> Close </button>
                    </div>
                </div>
            }
            
            <div className="row qa-block">
                <div className="qa-block" id='trivia-question-display'>
                    <div className="qa-card">
                    {
                        this.props &&
                        
                            <div className="card-body">
                                <h4> {this.props.question.question}</h4>
                                
                                <div className="answer-list">
                                    {this.allAnswers().map(answer =>
                                        <div>
                                            <button value={answer} onClick={(e) => { this.checkAnswer(e.target.value) }} className="btn btn-primary btn-block answer-button">
                                                {answer}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>                      
                    }
                    
                    </div>
                    {
                        this.state.showNextQuestionButton &&
                        //<button onClick={(e) => { this.getNextQuestion()}} className="btn btn-primary next-question">
                        //    Next Question
                        //</button>
                        <button onClick={event => window.location.href = '/triviaquestions'} className="btn btn-primary next-question">
                            Next Question
                        </button>
                        //<Link to="/triviaquestions" className="btn btn-primary next-question">Next Question</Link>
                    }
                </div>
            </div>
        </>
    }



    
}


export default withRouter(QuestionAnswerBlock);
