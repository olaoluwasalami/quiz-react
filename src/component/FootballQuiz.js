import React, { Component } from 'react';
import './FootballQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionGenerator from '../fil/QuestionGenerator';
import Question from '../component/Question';
import Result from './Result';


class FootballQuiz extends Component {
    constructor(props){
    super(props);
    this.state = ({
        showQuiz: false
        })

        this.state ={ 
                                   
        questionList: QuestionGenerator(),
        questionIndex: 0,
        score: 0
        }
        this.showContent= this.showContent.bind(this);
        this.scoreQuestion = this.scoreQuestion.bind(this);
        this.showHome = this.showHome.bind(this);
    }

    showHome(){        
        this.setState({
            showQuiz: true
            
        });
        
    }
    showContent(){        
        if(this.state.questionIndex < this.state.questionList.length ){
         return <Question content = {this.state.questionList[this.state.questionIndex] } scoreQuestion={this.scoreQuestion}/>
        }
        return  <Result score={this.state.score}/>
                 
       
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
        return this.setState.showQuiz ? (
                        <div>
            <h1>Football Quiz</h1>  
            {this.showContent()} 
            </div>
        ) : (
             <div>
                 <h1> Football Quiz</h1>
                 <h3> Do you know Football? Challenge yourself</h3>
            <button  className="load" onClick={this.showHome}> Click here</button>
           
        </div>
        );
    }
}

export default FootballQuiz;