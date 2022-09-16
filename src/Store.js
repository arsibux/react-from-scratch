import { createStore, combineReducers } from 'redux'
import { tasks } from './Task/TaskReducers'

const reducers = [tasks]
const rootReducer = combineReducers(reducers)

export const ConsfigurStore = () => createStore(rootReducer)
