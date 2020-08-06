import CarsReducer from './Cars/CarsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    car : CarsReducer,
})

export default rootReducer