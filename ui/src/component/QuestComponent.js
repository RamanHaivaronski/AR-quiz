import React from "react"
import "./QuestComponent.css"
import TextQuestion from "./QuestionData/TextQuestion/TextQuestion";
import Answers from "./Answers/Answers";
import posed from "react-pose";

const AnimatedContainer = posed.div({
    visible: {opacity: 1, zIndex: 9999},
    invisible: {opacity: 0, zIndex: 0}
});

const QuestComponent = ({quest, onClose, onPick, picked, valid}) => {
    let state = "visible";
    let Question = null;
    let Data = null;
    if (quest === null || (quest.text === null && quest.sound === null && quest.picture === null))
        state = "invisible";
    else {
        if (quest.text !== null) {
            if (quest.sound === null && quest.picture === null) {
                Question = <TextQuestion text={quest.text}/>
            }
        }
        Data = <div className="test">
            <div className="questHeader">
                <button className="close-thik round close" onClick={onClose}/>
            </div>
            <div className="questDataFrame">
                {Question}
            </div>
            <div className="questDataFrame">
                <Answers picked={picked} valid={valid} answers={quest.answers}
                         onClick={answer => onPick(quest.questionId, answer)}/>
            </div>
        </div>
    }
    return <AnimatedContainer className="questFrame" pose={state}>
        {Data}
    </AnimatedContainer>
};

export default QuestComponent;