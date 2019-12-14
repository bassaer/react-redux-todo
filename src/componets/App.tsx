import React from 'react';
import { TaskActions } from '../actions/Tasks'
import { Task, State } from '../reducers/Tasks'

type Props = State & TaskActions

export const App: React.FC<Props> = (props: Props)=> {
    return (
        <div>
            <input
                className="input-box"
                type="text"
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    props.inputTask(event.currentTarget.value)
                }}
                value={props.task}
            />
            <input
                type="button"
                value="add"
                onClick={() => {
                    props.addTask(props.task)
                    props.clearTask()
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
