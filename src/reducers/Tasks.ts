import { Reducer } from 'redux';
import { TaskAction } from '../actions/Tasks';

export type Task = string
export interface State {
    task: string,
    tasks: Array<Task>
}

const initialState: State = {
    task: '',
    tasks: []
}

export const taskReducer: Reducer<State, TaskAction> = (state: State = initialState, action: TaskAction) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            }
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            }
        case 'CLEAR_TASK':
            return {
                ...state,
                task: ""
            }
        default:
            return state;
    }
}
