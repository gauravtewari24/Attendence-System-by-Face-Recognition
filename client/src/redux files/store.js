import reducer from './reducer'
import {createStore, applyMiddleware} from 'redux'
import { createLogger } from "redux-logger";
const logger =createLogger();
const store = createStore(reducer,applyMiddleware(logger));
export default store;