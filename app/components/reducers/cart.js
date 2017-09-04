const cart = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: state.length,
                    name: action.text,
                    completed: false
                }
            ];

        default:
            return state;
    }
}

export default cart;