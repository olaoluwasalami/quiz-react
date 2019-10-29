import React, { Component } from 'react';
import './FootballQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionGenerator from '../fil/QuestionGenerator';
import Question from '../component/Question';
import Result from './Result';


class FootballQuiz extends Component {
    constructor(props){
    super(props);
        this.state ={
        questionList: QuestionGenerator(),
        questionIndex: 0,
        score: 0
        }
        this.showContent= this.showContent.bind(this);
        this.scoreQuestion = this.scoreQuestion.bind(this);
        
    }
    showContent(){
        if(this.state.questionIndex < this.state.questionList.length){
         return <Question content = {this.state.questionList[this.state.questionIndex] } scoreQuestion={this.scoreQuestion}/>
        }
        return  <Result score={this.state.score }/>
                 
       
    }
scoreQuestion(value) {
    console.log("Your score is", value)
       // increase question index state
    let question = this.state.questionList[this.state.questionIndex];
    this.setState((state) => {
        return {...state.questionIndex++}
    
        })     
     if(value == question.answer){
         this.setState((state) =>{
             return {...state.score+=20}
         })
     }
}
    render(){
        return(
            <div>
            <h1>Football Quiz</h1>  
            {this.showContent()} 
            </div>
        )
    }
}

export default FootballQuiz;