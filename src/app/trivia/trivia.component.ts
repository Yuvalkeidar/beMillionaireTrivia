import { Component, OnInit } from '@angular/core';
import {TriviaApiService, beAMillionere} from '../trivia-api.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

	constructor( private triviaApi : TriviaApiService){}

	questions = []
	answers = []
	questionText = ""
	questionNumber = 0
	answerChecked = false
	correctAnswerIndex = -1
	selectedAnswerIndex = -1
	
	triviaValueChanged(e) { 
		this.selectedAnswerIndex = e.srcElement.dataset.index
	}

	initVariables(){
		this.answerChecked = false
		this.correctAnswerIndex = -1
		this.selectedAnswerIndex = -1
	}

	buildQuestions(currQuestion){
		let index = Math.floor(Math.random() * 3)  
		//new instance
		this.questionText = currQuestion.question
		this.answers = currQuestion.incorrect_answers.slice()
		this.answers.splice(index, 0, currQuestion.correct_answer)
		this.correctAnswerIndex = index
	}
	checkAnswer(){
		if (this.selectedAnswerIndex == -1) {
			alert('Please select for answer')
		}else{
			//if selected then wait 3 sec and pass to the next question
			this.answerChecked = true			
		    setTimeout(() => {
		        this.nextQuestion()
		    }, 3000);
		}
	}
	nextQuestion(){
		let questionDetails = {}
		this.questionNumber++
		if (this.questionNumber > this.questions.length) {
			alert('This was the last question')
		}else{
			this.initVariables()
	        questionDetails = this.questions[this.questionNumber-1]
	        this.buildQuestions(questionDetails)
	    }
	}
	ngOnInit() {
		this.triviaApi.getData().subscribe(data =>{
			//delete unwanted character from webservice parsing
            this.questions = JSON.parse(decodeURI(JSON.stringify(data.results)))
            //get next question to our trivia
            this.nextQuestion()
        })
	}

}
