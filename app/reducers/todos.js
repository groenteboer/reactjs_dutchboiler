const initialState = {
    todos: [{id:1,name: 'first todo', completed: false}, {id:2,name: 'second todo', completed: false}]
}

const Todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.text,
                    completed: false
                }
            ];
        case "TOGGLE":
            return state.map(
                todo => {
                    if (todo.name !== action.name) {
                        return todo;
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                });


        default:
            //todo remove
            //   debugger;
            return state;
    }
}

export default Todos;