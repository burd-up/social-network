import React from 'react';
import s from './ToDo.module.css'

function Task(props) {
    return <div className={s.completedTasks}>
        <div>
            {props.taskTekst}
        </div>
        <div >
            <p>начало: {props.startTime}</p>
            <p>конец: {!props.endTime? "в_работе" : props.endTime}</p>
        </div>
        <button onClick={() => {props.deleteTask(props.id)}}>delete</button>
    </div>
}


const CompletedTasks =React.memo((props) => {
    let tasks;
    if (props.completedTasks.length === 0) {
        tasks = "Нет выполненых заданий"
    } else {
        tasks = props.completedTasks.map(task => <Task key={task.id} deleteTask={props.deleteTask} taskTekst={task.task}
                                                     id={task.id} startTime={task.startTime} endTime={task.endTime}/>)
    }
    return (
        <div className={s.tasks}>
            <h3>Выполненые задачи:</h3>
            {tasks}
        </div>
    )
});

export default CompletedTasks;