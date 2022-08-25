import {combineReducers} from 'redux'
import languageDataReducer from './languageData';
import darkModeReducer from './darkMode'
const rootReducer = combineReducers({
languageData : languageDataReducer,
darkMode : darkModeReducer
})

export default rootReducer;