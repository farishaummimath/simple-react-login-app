import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {startGetEmployees} from './actions/employee'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'


const store = configureStore()




store.dispatch(startGetEmployees())

console.log(store.getState())


const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));