import axios from 'axios';

export class TriviaRepository {
        url = "https://opentdb.com/api";
        config = {
            headers: { "Content-Type": "application/json" }
        };

        get10() {
            return new Promise((resolve, reject) => {
                axios.get(`https://opentdb.com/api.php?amount=10`, this.config)
                    .then(x => resolve(x.data))
                    .catch(x => {
                        alert(x);
                        reject();
                    });
            });
        }

        getOne() {
            return new Promise((resolve, reject) => {
                axios.get(`https://opentdb.com/api.php?amount=1`, this.config)
                    .then(x => resolve(x.data))
                    .catch(x => {
                        alert(x);
                        reject();
                    });
            });
        }

        getTriviaCategories() {
            return new Promise((resolve, reject) => {
                axios.get(`https://opentdb.com/api_category.php`, this.config)
                    .then(x => resolve(x.data))
                    .catch(x => {
                        alert(x);
                        reject();
                    });
            });
        }

        getTrivia(triviaFormData) {
            return new Promise((resolve, reject) => {
                axios.get(`${this.url}.php?amount=${triviaFormData.amount}/&category=${triviaFormData.categoryNumber}.php`, this.config)
                    .then(x => resolve(x.data))
                    .catch(x => {
                        alert(x);
                        reject();
                    });
            });
    }


}
