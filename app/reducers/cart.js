
let products = [
    {
        id: 1,
        name: 'apples',
        price: 12
    },
        {
            id: 2,
            name: 'pears',
            price: 20
        }
]

const cart = (state = products, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                action.object
            ];


        default:
            return state;
    }
}

export default cart;