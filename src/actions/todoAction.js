import axios from "axios"

export const fetchData = () => dispatch => { 
  axios.get('https://haekal-todo-list-api.herokuapp.com/todos')
  .then(res => 
    dispatch({
      type: "FETCH_DATA",
      payload: res.data // payload adalah muatan
  }).catch((error) => console.log(error))
  )
};