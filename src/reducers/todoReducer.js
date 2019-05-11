const initialState = {
  todo_list: [],
  new_todo: {}
};

export default (state = initialState, action) => {
  // console.log(action) //to see the object in browser
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        todo_list: action.payload
      };
    default:
      return state;
  }
};
