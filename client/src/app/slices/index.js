import { combineReducers } from 'redux'
import languageDataReducer from './languageData'
import studentsReducer from './students'

const rootReducer = combineReducers({
    languageData: languageDataReducer,
    students: studentsReducer
})

export default rootReducer
