import axios from "axios";

export const getAnswers = () => {
    axios.get(`./api/result/checkAnswer`)
        .then(res => {
            const answers = res.data;
            answers.forEach(x => {
                let model = document.getElementById(`quest_${x.questionId}`);
                if(model !== null){
                    model.attributes[3].value = x.isCorrect ? "green" : "red";
                }
            });
        });
}