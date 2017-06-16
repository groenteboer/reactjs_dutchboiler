import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers/todos';

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store;
