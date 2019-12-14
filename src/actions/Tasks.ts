import { Task } from '../reducers/Tasks'
import { Action } from 'redux';

export interface TaskAction extends Action {
    payload: {
        task: Task
    }
}

export const addTask = (task: Task): TaskAction => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
});

export const inputTask = (task: Task): TaskAction => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
});

export const clearTask = (): TaskAction => ({
    type: "CLEAR_TASK",
    payload: {
        task: ""
    }
})

export interface TaskActions {
    addTask: (task: Task) => TaskAction
    inputTask: (task: Task) => TaskAction
    clearTask: () => TaskAction
}
