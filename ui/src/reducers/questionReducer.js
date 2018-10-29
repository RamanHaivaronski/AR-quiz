const initialState = {
  quest: null
};

export default function questionReducer(state = {...initialState}, action) {
  switch (action.type) {
    case "FETCH_QUESTION_END":
      return {quest:action.payload};
    default:
      return state;
  }
}