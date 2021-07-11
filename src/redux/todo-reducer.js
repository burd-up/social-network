const ADD_NEW_TASK = 'ADD_NEW_TASK';
const ADD_COMPLETED_TASK = 'ADD_COMPLETED_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
    currentTasks: [],
    completedTasks: [],
    _id: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            state._id.push(state._id.length);
            let newTask = {
                id: state._id[state._id.length-1],
                task: action.taskText,
                startTime: new Date().toLocaleTimeString(),
                endTime: null,
            };
            return {
                ...state,
                currentTasks: [...state.currentTasks, newTask],
            };
        case ADD_COMPLETED_TASK:
            state.currentTasks.filter(task => task.id === action.id)[0].endTime = new Date().toLocaleTimeString(); //добавляем время окончания задачи
            return {
                ...state,
                completedTasks: [...state.completedTasks, ...state.currentTasks.filter(task => task.id === action.id)],
                currentTasks: [...state.currentTasks.filter(task => task.id !== action.id)]
            };
        case DELETE_TASK:
            return {
                ...state,
                completedTasks: [...state.completedTasks.filter(task => task.id !== action.id)],
                currentTasks: [...state.currentTasks.filter(task => task.id !== action.id)]
            };
        default:
            return state;
    }
};

export const addNewTask = (taskText) => ({type: ADD_NEW_TASK, taskText: taskText});
export const addCompletedTask = (id) => ({type: ADD_COMPLETED_TASK, id: id});
export const deleteTask = (id) => ({type: DELETE_TASK, id: id});

export default todoReducer;

