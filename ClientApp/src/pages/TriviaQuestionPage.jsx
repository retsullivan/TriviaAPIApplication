import React from 'react';
import { QuestionAnswerBlock } from "../components/QuestionAnswerBlock";
import { Question, User, AnswerValue } from "../models";
import { AnswerTracker } from '../components/AnswerTracker';
import { TriviaRepository, ScoreRepository } from "../services";
import { withRouter } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/component.css";


export class TriviaQuestions extends React.Component {
    triviaRepository = new TriviaRepository();
    scoreRepository = new ScoreRepository();
    
    state = {
        trivia: [],
        user: ""
    };

    componentDidMount() {
        this.triviaRepository.getOne()
            .then(response => this.setState({ trivia: response.results }));
        this.getUserScores();
    };

    getUserScores() {
        this.scoreRepository.getScoreSummary()
            .then(response => this.setState({user:response}));
    }

    getNextQuestion() {
        this.triviaRepository.getOne()
            .then(response => this.setState({ trivia: response.results}));
    }


    handleAnswer(answer) {
        this.scoreRepository.recordAnswerValue(new AnswerValue(5, answer))
            .then(this.getUserScores());
    } 
    

    render() {
        return <>
            {
                this.state.user &&
                <AnswerTracker user={this.state.user}> </AnswerTracker>
            }
            <div className="row">  
                {
                    !this.state.trivia &&
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="jeparody-home-card">
                                Insert Jeapordy Music Here
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.trivia &&
                    this.state.trivia.map(question =>
                        <QuestionAnswerBlock question={question}
                            user={this.state.user}
                            handleAnswer={this.handleAnswer.bind(this)}
                            getNextQuestion={this.getNextQuestion.bind(this)}
                            getUserScores={this.getUserScores.bind(this)} >
                        </QuestionAnswerBlock>
                )}      

            </div>
           
        </>
    }
}

export default withRouter(TriviaQuestions);

   

