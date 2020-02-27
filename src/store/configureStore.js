import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import employeesReducer from '../reducers/employeesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        employees: employeesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore