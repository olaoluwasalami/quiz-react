import React from 'react';
import './QuestionOptions.css'


function  QuestionOptions(props) {
    let optionValue = props.value;
    return(
        < div className="tev text-white" onClick = {() => props.scoreQuestion(props.value)}>
            <input type='radio' value={optionValue} checked={false }/> 
            {optionValue}    
          
                 </div>
)
    };

 

export default QuestionOptions;
