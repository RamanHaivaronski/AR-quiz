import React from "react"
import "./Answers.css"

const Answers = ({answers, onClick, picked, valid}) => {
  if (answers === null)
    return null;

  return <React.Fragment>
    {answers.map(x => {
      let status = null;
      if(picked === x.answerId){
        if(valid){
          status = {backgroundColor: "green"}
        }else{
          status = {backgroundColor: "red"}
        }
      }
      return <div className="answer" key={x.answerId} onClick={() => onClick(x.answerId)} style={status}>
        <h4 style={{margin: "5vw"}}>{x.text}</h4>
      </div>
    })}
  </React.Fragment>
};

export default Answers;