import React from 'react';
import { TriviaRepository } from '../services';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { QuestionAnswerBlock } from "../components/QuestionAnswerBlock";
import "../components/component.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class SelectCategories extends React.Component
{
    triviaRepository = new TriviaRepository;
    state = {
        trivia_categories:[],
        triviaFormData:[],
        value: '0',
        questionChosen: false,
        question:""
        };

    componentDidMount() {
        this.triviaRepository.getTriviaCategories()
            .then(response =>
                this.setState({ trivia_categories: response.trivia_categories }))
    }


    choseCategories(triviaFormData) {
        var onSaveComplete = () => {
            this.setState({});
        }
        this.triviaRepository.getTrivia(triviaFormData)
            .then(onSaveComplete);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        this.setState.triviaFormData.push(1);
        this.setState.triviaFormData.push({ categoryNumber: this.state.value });
        var newQuestion = this.choseCategories(this.state.triviaFormData);
        this.setState({ question: newQuestion, questionChosen:true })
    }


    render() {
        return <>
            {!this.state.questionChosen &&
                <div className="row qa-block">
                    <div className="qa-card">
                            <h3 className="display-4">Chose a category</h3>
                            {
                                this.state.trivia_categories &&
                                <form onSubmit={this.handleSubmit} className="answer-button">
                                    <label>
                                        Select a category:
                                           
                                        <select value={this.state.value} onChange={e=>this.handleChange(e)}>
                                            <option value='0' >  </option>
                                            {
                                        this.state.trivia_categories.map(category => (
                                            <option value={category.id} > {category.name} </option>
                                                ))
                                            }
                                        </select>

                                    </label>
                                    <input type="submit" value="Submit" className="btn btn-primary select-category-button"/>
                                </form>
                            }

                    </div>
                </div>
            }
            <div className="row">
                {
                    this.state.questionChosen &&
                    this.state.question &&
                        <QuestionAnswerBlock question={this.state.question}></QuestionAnswerBlock>
                }
            </div>

        </>
    }
}
export default withRouter(SelectCategories);
