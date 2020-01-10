import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ScoreContext } from './services/ScoreContext';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { TriviaQuestions, SelectCategories, TriviaGame } from "./pages";
import './custom.css'
import { ScoreService } from './services/ScoreService';

export default class App extends Component {
    static displayName = App.name;

    scoreService = new ScoreService();

  render () {
      return (
          <ScoreContext.Provider value={this.scoreService}>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/selectcategories' component={SelectCategories} />
                <Route path='/triviaquestions' component={TriviaQuestions} />
                <Route path='/triviagame' component={TriviaGame} />
            </Layout>
        </ScoreContext.Provider>
    );
  }
}
