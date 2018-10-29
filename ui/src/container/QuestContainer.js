import { connect } from "react-redux"
import QuestComponent from "../component/QuestComponent";
import {closeQuestion, pickAnswer} from "../action/questActions";

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

const QuestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestComponent)

export default QuestContainer;