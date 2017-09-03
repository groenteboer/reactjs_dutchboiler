
const cart = (state = [{"name":'tv'}], action) => {
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

        default:
            return state;
    }
}

export default cart;