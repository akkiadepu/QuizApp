import React, { useRef, useState } from 'react'
 import { data } from './data';
 import './index.css'
 const Qiizz = () => {
  // this is for index the quctions
    var [index,setIndex]=useState(0);
    const [questions,setQuestions]=useState(data[index]);
    // to lock our answars
    const [lock,setLock]=useState(false);
    // to store the corrents answars
    const [score,setScore]=useState(0);
    // to show the result
    const [result,setResult]=useState(false);


    // to show the true options
    const Option1=useRef(null);
    const Option2=useRef(null);
    const Option3=useRef(null);
    const Option4=useRef(null);

    let option_arry=[Option1,Option2,Option3,Option4];

    const checkAns=(e,ans)=>{

        if (lock === false) {
          if (questions.ans===ans) {
            e.target.classList.add("correct");
            setLock(true);
            setScore(prev=>prev+1)
          }
          else{
            e.target.classList.add("wrong");
            setLock(true);
            option_arry[questions.ans-1].current.classList.add("correct");
          }
          
        }
        
    }

    const next = () =>{
      if (lock===true) {
        if( index === data.length-1){
          setResult(true);
          return 0;

        }
        setIndex(++index);
        setQuestions(data[index]);
        setLock(false);
        option_arry.map((Option)=>{
          Option.current.classList.remove("wrong");
          Option.current.classList.remove("correct");
          return null;
        })
      }

    }

    const reset=()=>{
      setIndex(0);
      setQuestions(data[0]);
      setScore(0);
      setLock(false);
      setResult(false);
    }

  return (
    <div className='body'>
        <div className='card'>
        <div>
            <h1>Quiz App</h1>
            <hr/>
            {result?<></>:<>
            <div>
            <h4>{index+1}.{questions.question}</h4><br/>
           <ul>
            <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{questions.option1}</li>
            <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{questions.option2}</li>
            <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{questions.option3}</li>
            <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{questions.option4}</li>
           </ul>

              <button onClick={next}>Next</button>  <br/>
            <p className='index'>{index+1}  of  {data.length} questions</p>
        </div>
            </>}
            {result?<><h2>Your Scord {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button></>:<></>}
            
        </div>
        
        </div>

    </div>
  )
}

export default Qiizz;

