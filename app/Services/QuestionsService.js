import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { trivia_api } from "./AxiosService.js";
import { Pop } from "../Utils/Pop.js";

class QuestionsService {

    async getQuestions() {
        const res = await trivia_api.get('api.php?amount=50&category=9&difficulty=medium&type=multiple')
        appState.questions = res.data.results
        console.log(appState.questions)
    }

    findQuestion() {
        let questions = appState.questions
        let randomIndex = Math.floor(Math.random() * questions.length)
        console.log(randomIndex)
        let randomQuestion = questions[randomIndex]
        appState.posedQuestion = randomQuestion
        appState.askedQuestions.push(randomQuestion)
        console.log(appState.askedQuestions)
    }

    findAnswers() {
        let answer = appState.posedQuestion.correct_answer
        let wrongAnswers = appState.posedQuestion.incorrect_answers
        // console.log('correct:', answer)
    }

    choosesCorrectAnswer() {
        Pop.toast('Nice Job!', 'success', 'center', 3000, true)
    }

    choosesWrongAnswer() {
        Pop.toast('Not Quite...', 'error', 'center', 3000, true)
    }
    get AnswerTemplate(){
        let positionNumber = Math.floor(Math.random() * 5)
        console.log(positionNumber)
        return /*html*/ `
        <h5 class="border border-dark rounded p-2 order-${positionNumber} pointer" 
        onclick="app.questionsController.choosesCorrectAnswer()">
        ${appState.posedQuestion.correct_answer}</h5>
        `
    }
}

export const questionsService = new QuestionsService();