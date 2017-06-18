const todos = (state = [
    {
        id: 1,
        name: 'adssad',
        completed: false
    }
], action) => {
    switch (action.type) {
        case "ADD":
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
        {
            //todo remove
            debugger;
            //todo dont forget the return here
            return state.map(todo => {
                    if (action.text !== todo.name) {
                        return todo;fdsfsd
                    }

                    //todo remove
                    debugger;
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }


            );

        }


        default:
            return state;
    }
}

export default todos;