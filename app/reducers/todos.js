// const initialState = {
//     todos: [{id:1,name: 'first todo', completed: false}, {id:2,name: 'second todo', completed: false}]
//}

const Todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            //todo remove
            debugger;
            return [
                ...state,
                {
                    id: state.length,
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
                    //todo remove
                    console.log('toggle success');

                    //todo remove
                    debugger;

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