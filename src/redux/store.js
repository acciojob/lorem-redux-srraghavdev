import { apiReducer } from "./reducer/apiReducer";
import {createStore} from 'redux'
import thunk from "redux-thunk";
import {applyMiddleware} from 'redux'

export let store= createStore(apiReducer,applyMiddleware(thunk)) 

