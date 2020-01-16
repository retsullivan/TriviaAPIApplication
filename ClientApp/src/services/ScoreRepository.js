import axios from 'axios';

export class ScoreRepository {
    url = "https://localhost:44349";
    config = {
        headers: { "Content-Type": "application/json" }
    };

    getScoreSummary() {
        return new Promise((resolve, reject) => {
            axios.get(`https://localhost:44349/TriviaScores`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        });
    }

    getUserScores(id) {
        return new Promise((resolve, reject) => {
            axios.get(`https://localhost:44349/TriviaScores/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        });
    }

    getIds() {
        return new Promise((resolve, reject) => {
            axios.get(`https://localhost:44349/TriviaScores/AllIds`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        });
    }

    getAllStats() {
        return new Promise((resolve, reject) => {
            axios.get(`https://localhost:44349/TriviaScores/StatList`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        });
        
    }


    recordAnswerValue(answerValue) {
        return new Promise((resolve, reject) => {
            axios.put(`https://localhost:44349/TriviaScores/Edit`, answerValue, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        });
    }
   

    //addUser(user) {
    //    return new Promise((resolve, reject) => {
    //        axios.post(`${this.url}/TriviaScores/Create`,user, this.config)
    //            .then(x => resolve(x.data))
    //            .catch(x => {
    //                alert(x);
    //                reject();
    //            });
    //    });
    //}

    //editUserStats(user,id) {
    //    return new Promise((resolve, reject) => {
    //        axios.put(`${this.url}/TriviaScores/Edit/1`, user, this.config)
    //            .then(x => resolve(x.data))
    //            .catch(x => {
    //                alert(x);
    //                reject();
    //            });
    //    });
    //}

    

}