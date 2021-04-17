const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 5,
                message: action.newMessage,
            };
            return {...state,
                messageData: [...state.messageData, message],
            };
        default:
            return state;
    }
};

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage: newMessage});

export default dialogsReducer;

