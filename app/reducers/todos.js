const initialState = {
    todos:[{name:'first todo'},{name:'second todo'}]
}

const Todos = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_TODO":
          //todo remove
          console.log('ADD_TODO',action);
          //todo remove
          debugger;
          var newState = Object.assign({}, state, {todos: [...state.todos, action.data]});
          return newState;
    default:
        //todo remove
     //   debugger;
      return state;
  }
}

export default Todos;