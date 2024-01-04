import React from 'react'
import { data } from './data'
const Quiz = () => {
  return (
    <div className='body'>
        <div>
            <h1>Quiz App</h1>
            <hr/>
        </div>
        <div>
            <h4>{data.question}</h4><br/>
            
            <input type='radio'/>{data.option1}<br/>
            <input type='radio'/>{data.option2}<br/>
            <input type='radio'/>{data.option3}<br/>
            <input type='radio'/>{data.option4}<br/>

              <button>Next</button>  <br/>
            <p>1 of 5 questions</p>
        </div>

    </div>
  )
}

export default Quiz