const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const initialState = {
    dialogData: [
        {id: 1, name: "Ania"},
        {id: 2, name: "Misha"},
        {id: 3, name: "Andrey"},
    ],
        messageData: [
        {id: 1, message: "hi!"},
        {id: 2, message: "how are you!"},
        {id: 3, message: "im fine!"},
    ],
        newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let mess = {
                id: 5,
                message: state.newMessageText,
            };
            return {...state,
                messageData: [...state.messageData, mess],
                newMessageText: ''
            };
        case CHANGE_MESSAGE_TEXT:
            return {...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeMessageTextActionCreator = (text) => ({type: CHANGE_MESSAGE_TEXT, newText: text});

export default dialogsReducer;

