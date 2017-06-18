import { createStore} from 'redux'
import reducer from './reducers/todos'

//todo only 1 argument for this one
const store = createStore(
    reducer
)

console.log('store=fuck',store)
export default store;
