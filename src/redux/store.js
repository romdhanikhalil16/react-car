import { createStore , applyMiddleware } from 'redux'
import rootReducer from './Rooter'


const store = createStore(rootReducer)

export default store 