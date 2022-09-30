import { combineReducers } from 'redux'
import languageDataReducer from './languageData'

const rootReducer = combineReducers({
    languageData: languageDataReducer,
})

export default rootReducer
