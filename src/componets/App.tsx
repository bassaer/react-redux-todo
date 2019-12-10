import React from 'react';
import { Store } from 'redux';
import { inputTask, addTask } from '../actions/Tasks'
import { Task } from '../reducers/Tasks'

const App: React.FC<Store> = (store: Store) => {
    const  {task, tasks} = store.getState()
    return (
        <div>
            <input
                type="text"
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    store.dispatch(inputTask(event.currentTarget.value))
                    console.log(event.currentTarget.value)
                    console.log(JSON.stringify(store.getState()))
                }}
            />
            <input
                type="button"
                value="add"
                onClick={() => {
                    store.dispatch(addTask(task))
                    console.log(JSON.stringify(task))
                }}
            />
            <ul>
                {
                    tasks.map((task: Task, index: number) => {
                        return (
                            <li key={index}>{task}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default App;
