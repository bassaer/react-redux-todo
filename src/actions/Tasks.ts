import { Task } from '../reducers/Tasks'

export const addTask = (task: Task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
});

export const inputTask = (task: Task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
})
