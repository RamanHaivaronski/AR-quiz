import React from "react"
import "./TextQuestion.css"
import posed from "react-pose";

const AnimatedDiv = posed.div({
    idle: {scale: 0.9},
    hovered: {scale: 1}
});

const TextQuestion = ({text}) => {
    if (text === null)
        return null;

    return (
        <AnimatedDiv className="questTextFrame round" pose="idle">
            <div className="textQuestion ">
                {text}
            </div>
        </AnimatedDiv>
    )
};

export default TextQuestion;