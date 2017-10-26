import { combineReducers } from 'redux'
import hood from './hood'
import map from './mapReducer'

const rootReducer = combineReducers({
	hood,
	map 

})

export default rootReducer