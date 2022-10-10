export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_DEVELOPER":
      return [...state, action.payload];
    case "REMOVE_DEVELOPER":
        const arr = state.filter((item) => {
            return item !== "b"
        }); 
        // console.log(arr)
      return [...arr]
    default:
      throw new Error();
  }
}
