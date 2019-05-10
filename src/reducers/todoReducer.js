const initialState = {
  todo_list: {},
  new_todo: {}
}

export default (state = initialState, action) => {
  console.log(action)
  return state
}