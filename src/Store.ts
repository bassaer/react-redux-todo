import { createStore } from 'redux';
import { taskReducer } from './reducers/Tasks';

const store = createStore(taskReducer);

export default store;
