import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from './redux/reducers/index';
import thunkMiddleware from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, reduxPromise)
)

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
);

