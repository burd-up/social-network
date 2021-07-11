import React from 'react';
import s from './ToDo.module.css'

function Task(props) {
    return <div className={s.currentTasks}>
        <button onClick={() => {props.addCompletedTask(props.id)}}>completed</button>
        <div >
            {props.taskTekst}
        </div>
        <div>
            <p>начало: {props.startTime}</p>
            <p>конец: {!props.endTime? "в_работе" : props.endTime}</p>
        </div>
        <button onClick={() => {props.deleteTask(props.id)}}>delete</button>
    </div>
}


const CurrentTasks =React.memo((props) => {
    let tasks;
    if (props.currentTasks.length === 0) {
        tasks = "Нет заданий"
    } else {
        tasks = props.currentTasks.map(task => <Task key={task.id} addCompletedTask={props.addCompletedTask} deleteTask={props.deleteTask} taskTekst={task.task}
                                                     id={task.id} startTime={task.startTime} endTime={task.endTime}/>)
    }
    return (
        <div className={s.tasks}>
            <h3>Текущие задачи:</h3>
            {tasks}
        </div>
    )
});

export default CurrentTasks;