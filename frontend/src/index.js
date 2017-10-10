import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './css/index.css';
import App from './components/Pages/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore,compose, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk,logger)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >

            <App/>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
