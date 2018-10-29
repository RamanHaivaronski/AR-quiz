import React from "react"
import "./TextQuestion.css"

const TextQuestion = ({text}) => {
  if(text === null)
    return null;

  return <div className="textQuestion">{text}</div>
};

export default TextQuestion;