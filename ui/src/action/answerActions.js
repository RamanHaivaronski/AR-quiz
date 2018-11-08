import axios from "axios";

export const getAnswers = () => {
    axios.get(`./api/result/checkAnswer`)
        .then(res => {
            const answers = res.data;
            answers.forEach(x => {
                let model = document.getElementById(`quest_${x.questionId}`);
                if(model !== null){
                    model.attributes['entity-color'].value = x.isCorrect ? "#98fb98" : "#f08080";
                }
            });
        });
}