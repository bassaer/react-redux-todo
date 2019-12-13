import { connect } from 'react-redux';
import { App } from '../componets/App'
import { inputTask, addTask, clearTask } from '../actions/Tasks'
import { Task } from '../reducers/Tasks';
import { Dispatch } from 'redux';
import { State } from '../reducers/Tasks'

const mapStateToProps = (state: State) => {
    return {...state}
}

const mapDispatchToProp = (dispatch: Dispatch) => {
    return {
        addTask: (task: Task) => dispatch(addTask(task)),
        inputTask: (task: Task) => dispatch(inputTask(task)),
        clearTask: () => dispatch(clearTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(App);
