const todos = (state = [

], action) => {
    switch (action.type) {
        case "SHOWCOMPLETE":
            //todo filter is better than map in this case
            return state.filter(todo => {
                if (todo.completed) {
                    return todo
                }

            })
        case "ADD":
            return [
                ...state,
                {
                    id: state.length,
                    name: action.text,
                    completed: false
                }
            ];

        case "TOGGLE": {
            //todo dont forget the return here
            return state.map(todo => {
                    if (action.text !== todo.name) {
                        return todo;
                        fdsfsd
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