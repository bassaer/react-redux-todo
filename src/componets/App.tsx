import React from 'react';
import { inputTask, addTask } from '../actions/Tasks'
import { Task, State } from '../reducers/Tasks'

type Props = State

export const App: React.FC<Props> = (props: Props)=> {
    return (
        <div>
            <input
                type="text"
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    console.log(`onChange : ${event.currentTarget.value}`)
                    inputTask(event.currentTarget.value)
                }}
            />
            <input
                type="button"
                value="add"
                onClick={() => {
                    console.log(`onClick: ${props.task}`)
                    addTask(props.task)
                }}
            />
            <ul>
                {
                    props.tasks.map((task: Task, index: number) => {
                        return (
                            <li key={index}>{task}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
