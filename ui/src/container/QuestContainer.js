import { connect } from "react-redux"
import QuestComponent from "../component/QuestComponent";

const mapStateToProps = state => {
  return {
    quest: state.questData.quest
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {}
  }
}

const QuestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestComponent)

export default QuestContainer;