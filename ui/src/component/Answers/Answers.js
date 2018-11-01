import React from "react"
import "./Answers.css"
import posed from "react-pose";

const AnimatedDiv = posed.div({
    idle: {scale: 0.9},
    hovered: {scale: 1}
});


const Answers = ({answers, onClick, picked, valid}) => {
    if (answers === null)
        return null;

    return <React.Fragment>
        {answers.map(x => {
            let status = null;
            if (picked === x.answerId && valid !== undefined) {
                if (valid) {
                    status = {backgroundColor: "green"}
                } else {
                    status = {backgroundColor: "red"}
                }
            }
            return (
                <AnimatedDiv
                    pose={picked === x.answerId ? "hovered" : "idle"}
                    className="answer round"
                    key={x.answerId}
                    onClick={() => onClick(x.answerId)}
                    style={status}>
                    <h4 style={{fontSize: "1em", margin: "1em"}}>{x.text}</h4>
                </AnimatedDiv>
            )
        })}
    </React.Fragment>
};

export default Answers;