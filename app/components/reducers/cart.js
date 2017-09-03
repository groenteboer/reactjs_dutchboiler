const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function cart(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            debugger;
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]

        default:
            return state
    }
}