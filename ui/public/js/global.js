var clicked = function clicked(id){
  console.log(window.store.getState())
  window.store.dispatch(window.actions.fetchQuest(id))
}