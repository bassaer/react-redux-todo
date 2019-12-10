
export type Task = string
export type State = {
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
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            }
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            }
        default:
            return state;
    }
}
