const initialState = {
    todos:[]
}

const Todos = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_TODO":
          var newState = Object.assign({}, state, {todos: [...state.todos, action.data]});
          return newState;
    default:
      return state;
  }
}

export default Todos;