import React from 'react';
import './QuestionOptions.css'


function  QuestionOptions(props) {
    let optionValue = props.value;
    return(
        < div class="tev" onClick = {() => props.scoreQuestion(props.value)}>
            <p> <input type='radio' value={optionValue} checked={false} /> {optionValue} </p>
          
                 </div>
)
    };

 

export default QuestionOptions;
