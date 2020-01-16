import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ScoreContext } from './services/ScoreContext';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { TriviaQuestions, SelectCategories, TriviaGame, StatsPage } from "./pages";
import './custom.css'


export default class App extends Component {
    static displayName = App.name;


  render () {
      return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/selectcategories' component={SelectCategories} />
                <Route path='/triviaquestions' component={TriviaQuestions} />
              <Route path='/triviagame' component={TriviaGame} />
              <Route path='/stats' component={StatsPage} />
            </Layout>

    );
  }
}
