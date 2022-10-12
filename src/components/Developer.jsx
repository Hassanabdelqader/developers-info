export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_DEVELOPER":
      return [...state, {
        ...action.payload,
        id :state.length +1 
      }];
    case "REMOVE_DEVELOPER":
    return state.filter(item => item.id !==action.id)
    default:
      return state
  }
}
