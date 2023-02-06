import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestion() {
    let template = ''
    template += `<h3>${appState.posedQuestion.question}</h3>`
    setHTML('question', template)
}

function _drawAnswers() {
    let template = ''
    appState.posedQuestion.incorrect_answers.forEach(a => {
        template += `
            <h5 class="border border-dark rounded p-2">${a}</h5>
            `
    })
    template += `
    <h5 class="border border-dark rounded p-2">
    ${appState.posedQuestion.correct_answer}</h5>`
    setHTML('answers', template)
}


export class QuestionsController {

    constructor() {
        this.getQuestions()
    }

    findQuestion() {
        questionsService.findQuestion()
        _drawQuestion()
        _drawAnswers()
    }

    findAnswers() {
        questionsService.findAnswers()
        _drawAnswers()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }
}