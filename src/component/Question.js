import React from 'react';
import QuestionOptions from '../component/QuestionOptions';
import './Question.css'
function Question(props){
let questionBody = props.content;
  
 const showOptions = () => {
 return questionBody.options.map((options, i) => <QuestionOptions value={options} key={i} scoreQuestion={props.scoreQuestion}/>)
   
    }

  return (
<div >
    <h3>Question {props.questionIndex}</h3>
    <p className="gif"> {questionBody.question} </p>
    {showOptions()}
</div>
    )
}  

export default Question;
