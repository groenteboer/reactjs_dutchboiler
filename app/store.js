import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers/todos';

//const middleware = [ thunk ];

const store = createStore(
    reducer
)

export default store;
