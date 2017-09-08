import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/rootReducer'


function configureStore() {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;
    const enhancer = composeEnhancers(
        applyMiddleware(thunk,promiseMiddleware,thunkMiddleware),
        // other store enhancers if any
    );
    const store = createStore(
        rootReducer,
        enhancer,
    );
    return store;
}

export default configureStore
