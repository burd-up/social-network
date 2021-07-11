import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirecte";
import ToDo from "./ToDoList";
import {addCompletedTask, addNewTask, deleteTask} from "../../redux/todo-reducer";

class ToDoListContainer extends React.Component {
    render() {
        return <ToDo {...this.props} />;
    }
};

let mapStateToProps = (state) => {
    return {
        currentTasks: state.todoo.currentTasks,
        completedTasks: state.todoo.completedTasks
    }
 }

export default compose(
    connect(mapStateToProps,{addNewTask, addCompletedTask, deleteTask}),
    withAuthRedirect,
)(ToDoListContainer)

