import * as routes from './routes'

export const navigateToHomePage = (history)=>
history.push(routes.HOME_PAGE)

export const navigateToLoginPage = (history)=>
history.push(routes.LOGIN)