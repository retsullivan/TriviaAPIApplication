import React from 'react';
import { ScoreRepository } from '../services';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "../components/component.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class StatsPage extends React.Component {
    scoreRepository = new ScoreRepository();

    state = {
        showUserStats: false,
        userStats:[],
        userId:1,
        ids: [],

    }

    componentDidMount() {
        this.getIds();
        this.getAllUserStats();
    }

    loadUserScores() {
        this.scoreRepository.getUserScores(this.state.userId)
            .then(response => this.setState({ userStats: response }));
    }

    getIds() {
        this.scoreRepository.getIds().
            then(response => this.setState({ ids: response }));
    }

    getAllUserStats() {
        this.scoreRepository.getAllStats().
            then(response => this.setState({ userStats: response }));
    }

    resetForm() { }

    closeStatBlock() {
        this.setState({
            showUserStats: false,
        });
        this.resetForm();
    }

    handleChange(event) {
        this.setState({ userId: event.target.value });        
    }

    render() {
        return <>
            <div className="stat-page">
                <div className="stat-score-card">
                     <table className="table stat-table">
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>Total Correct</th>
                                <th>Total Incorrect</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {

                            this.state.userStats &&
                                this.state.userStats.map(user =>
                                    <tr>
                                        <td>
                                            {user.userName}
                                        </td>
                                        <td>
                                            {user.correctCount}
                                        </td>
                                        <td>
                                            {user.incorrectCount}
                                        </td>
                                        

                                    </tr>
                        )}  
                        </tbody>    
                    </table>
                </div>
            </div>
        </>
    }
}

export default withRouter(StatsPage);

