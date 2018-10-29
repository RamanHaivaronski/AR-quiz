import React, {Component} from "react"
import "./QuestComponent.css"

const QuestComponent = ({quest}) => {
  if(quest === null)
    return null;

  return <div className="questFrame"/>
};

export default QuestComponent;