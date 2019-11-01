import React from 'react';


function Result(props) {
    return(
        <div>
         <h1>Your Score is {props.score}%
           </h1>
        <input type='button' value = 'Play Again' className = "load" onClick ={() => window.location.reload()}/>
        </div>
    )
}

export default Result;