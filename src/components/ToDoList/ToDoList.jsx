import React from 'react';
import s from './ToDo.module.css'
import {Field, reduxForm} from "redux-form";
import CurrentTasks from "./CurrentTasks";
import CompletedTasks from "./CompletedTasks";

function ToDo(props) {

    let TaskForm = (props) => {
        return (
            <form className={s.form} onSubmit={props.handleSubmit}>
                <div>
                    <Field component="input" name="taskTekst" type="text" placeholder="new task"/>
                </div>
                <button>Add</button>
            </form>
        )
    }
    TaskForm = reduxForm({form: 'newTask'})(TaskForm);

    const onSubmit = (formData) => {
        props.addNewTask(formData.taskTekst)
    }

    return (<div>
            <TaskForm onSubmit={onSubmit}/>
            <div className={s.toDo}>
                <div >
                    <CurrentTasks currentTasks={props.currentTasks} addCompletedTask={props.addCompletedTask} deleteTask={props.deleteTask}/>
                </div>
                <div >
                    <CompletedTasks completedTasks={props.completedTasks} deleteTask={props.deleteTask}/>
                </div>
            </div>
        </div>
    )
};
export default ToDo;