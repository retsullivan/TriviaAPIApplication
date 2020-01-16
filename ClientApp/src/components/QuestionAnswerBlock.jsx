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

    state = {
        showQuestionBlock: false,
        showAnswerBlock: false,
        showNextQuestionButton: false,
        userAnswer: "",
        answers:[]
    }

    

    getAllAnswers() {
        var allAnswers = [];

        if (this.props.question.type == "multiple") {
            for (var i = 0; i < 3; i++) {
                allAnswers.push(this.props.question.incorrect_answers[i]);
            }
            allAnswers.push(this.props.question.correct_answer);
            allAnswers.sort(() => Math.random() - 0.5);
        }
        else { allAnswers = ["True", "False"]; }

        return allAnswers;
    }

    componentDidMount() {

        this.setState({
            showNextQuestionButton:false,
            userAnswer:"",
            answers:this.getAllAnswers(),
            showQuestionBlock:true
        });

    }


    checkAnswer(answer) {
        if (answer == this.props.question.correct_answer) {
            this.setState({ userAnswer: "Correct" })
        }
        else {
            this.setState({ userAnswer: "Incorrect" })
        }
        this.setState({ showAnswerBlock: true })
    }


    closeAnswerBlock() { 
        if (this.state.userAnswer == "Correct") {
            this.props.handleAnswer(true);
        }
        else {
            this.props.handleAnswer(false);
        }
        this.props.getUserScores();
        this.setState({
            showAnswerBlock: false,
            showNextQuestionButton: true,
        })
                    
    }


    next() {
        
        this.setState({
            showQuestionBlock: false,
            showNextQuestionButton: false,
            userAnswer: ""
        });
        this.props.getNextQuestion();
        this.componentDidMount();
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
                            this.state.showQuestionBlock &&
                            <div className="card-body">
                                <h4>
                                    <div dangerouslySetInnerHTML={{ __html: this.props.question.question }}>
                                    </div>
                                </h4>

                                <div className="answer-list">
                                    {
                                        this.getAllAnswers().map(answer =>
                                        <div>
                                            <button value={answer} onClick={(e) => { this.checkAnswer(e.target.value) }} className="btn btn-primary btn-block answer-button">
                                                {answer}
                                            </button>
                                        </div>
                                    )}
                                    {
                                        this.state.showNextQuestionButton &&
                                        <button onClick={(e) => { this.next() }} className="btn btn-outline-primary btn-block answer-button">
                                            Next Question
                                        </button>
                                    }
                                </div>
                            </div>
                        }
                        
                    </div>
                    
                </div>
            </div>
        </>
    }
 }


export default withRouter(QuestionAnswerBlock);
