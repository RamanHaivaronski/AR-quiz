import React, {Component} from "react"
import { connect } from "react-redux"
import QuestComponent from "../component/QuestComponent";
import {closeQuestion, pickAnswer} from "../action/questActions";
import {fetchAnswer, getAnswers} from "../action/answerActions";

class QuestContainer extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         answers: []
    //     }
    // }

    // getAnswers = () => {
    //     axios.get(`./api/result/checkAnswer`)
    //         .then(res => {
    //             const answers = res.data;
    //             answers.forEach(x => {
    //                 let model = document.getElementById(`quest_${x.questionId}`);
    //                 if(model !== null){
    //                     model.attributes[3].value = x.isCorrect ? "green" : "red";
    //                 }
    //             });
    //             this.setState({answers: res.data});
    //         });
    // }

    componentWillMount = () => {
        setTimeout(()=> getAnswers(), 500)

    }


    render() {
    return (
        <div>
            <QuestComponent {...this.props}/>
        </div>
    )
    }
}

const mapStateToProps = state => {
  return {
    quest: state.questData.quest,
    valid: state.questData.valid,
    picked: state.questData.picked
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => {dispatch(closeQuestion())},
    onPick: (quest,answer) => {dispatch(pickAnswer(quest,answer))}
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestContainer);