import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { tasksReducer } from './reducers/Tasks'

const store = createStore(tasksReducer);

const renderApp = () => {
    ReactDOM.render(<App {...store}/>, document.getElementById('root'));
}

store.subscribe(renderApp);
renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
