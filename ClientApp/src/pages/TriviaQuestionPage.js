import React from 'react';
import { QuestionAnswerBlock } from "../components/QuestionAnswerBlock";
import { Question } from "../models";
import { TriviaAPIResponse } from "../models";
import { TriviaRepository } from "../services";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/component.css";

export class TriviaQuestions extends React.Component {
    triviaRepository = new TriviaRepository;

    state = {
        trivia: []
    };

    componentDidMount() {
        this.triviaRepository.getOne()
            .then(response => this.setState({ trivia: response.results }));
    };
 
    render() {
        return <>    
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
                    //<QuestionAnswerBlock question={this.getNextQuestion()}></QuestionAnswerBlock>
                    this.state.trivia.map(question =>
                        <QuestionAnswerBlock question={question}></QuestionAnswerBlock>
                    )
                }  
            
            </div>
           
        </>
    }
}

export default withRouter(TriviaQuestions);

   

