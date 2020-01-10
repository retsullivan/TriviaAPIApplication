import { Score } from "../models/Score";
import React from 'react';

export class ScoreService extends React.Component {

    score = new Score();

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score.correctCount = 0;
        this.score.incorrectCount = 0;
    }

    addCorrect() {
        this.score.correctCount++;
    }

    addIncorrect() {
        this.score.incorrectCount++;
    }


    hideScore() {
        this.score.showScoreboard = false;
    }

    showScore() {
        this.score.showScoreboard = true;
    }

}