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
        let positionNumber = Math.floor(Math.random() * 5)
        template += `
            <h5 class="border border-dark rounded p-2 order-${positionNumber} pointer"
            onclick="app.questionsController.choosesWrongAnswer()">${a}</h5>
            `
    })
    template += questionsService.AnswerTemplate
    setHTML('answers', template)
}


export class QuestionsController {

    constructor() {
        this.getQuestions()
    }

    findQuestion() {
        questionsService.findQuestion()
        this.findAnswers()
        _drawQuestion()
    }

    findAnswers() {
        questionsService.findAnswers()
        _drawAnswers()
    }

    choosesCorrectAnswer() {
        questionsService.choosesCorrectAnswer()
        this.findQuestion()
    }

    choosesWrongAnswer() {
        questionsService.choosesWrongAnswer()
        this.findQuestion()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }
}