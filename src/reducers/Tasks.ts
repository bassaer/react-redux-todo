
export type Task = string
export interface State {
    task: string,
    tasks: Array<Task>
}

const initialState: State = {
    task: '',
    tasks: []
}

export const tasksReducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            console.log("Add task!!")
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            }
        case 'INPUT_TASK':
            console.log("Input task!!")
            return {
                ...state,
                task: action.payload.task
            }
        default:
            return state;
    }
}
