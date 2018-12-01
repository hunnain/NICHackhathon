import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import root from './reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk,logger);
const store = createStore(
    root,
    {},    
    compose(middleware)
)

export default store;