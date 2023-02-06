import { appState } from "../AppState.js"


export class Question {
    constructor(data) {
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers

        // NOTE incorrect_answers is an array
        //                     "incorrect_answers": [
        //                         "Royal Oak",
        //                         "White Hart",
        //                         "King&#039;s Head"]
    }

}
