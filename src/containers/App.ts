import { connect } from 'react-redux';
import { App } from '../componets/App'
import { inputTask, addTask } from '../actions/Tasks'
import { Task, State } from '../reducers/Tasks';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State) => {
    console.log("mapStateToProps")
    return {...state}
}

const mapDispatchToProp = (dispatch: Dispatch) => {
    console.log("mapDispatchToProp")
    return {
        addTask(task: Task) {
            dispatch(addTask(task))
        },
        inputTask(task: Task) {
            dispatch(inputTask(task))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProp)(App);
