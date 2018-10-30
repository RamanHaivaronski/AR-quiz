import React from "react"
import "./QuestComponent.css"
import TextQuestion from "./QuestionData/TextQuestion/TextQuestion";
import Answers from "./Answers/Answers";

const QuestComponent = ({quest, onClose, onPick, picked, valid}) => {
    if (quest === null || (quest.text === null && quest.sound === null && quest.picture === null))
        return null;
    let Question = null;
    if (quest.text !== null) {
        if (quest.sound === null && quest.picture === null) {
            Question = <TextQuestion text={quest.text}/>
        }
    }
    return <div className="questFrame">
        <div className="test">
            <div className="questHeader">
                <button className="close-thik close" onClick={onClose}/>
            </div>
            <div className="questDataFrame">
                {Question}
            </div>
            <div className="questDataFrame" style={{flexDirection: "column"}}>
                <Answers picked={picked} valid={valid} answers={quest.answers}
                         onClick={answer => onPick(quest.questionId, answer)}/>
            </div>
        </div>
    </div>
};

export default QuestComponent;