import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        messagePage: {
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
        },

        profilePage: {
            postData: [
                {id: 1, post: 'hi, how are you?', likesCount: 1},
                {id: 2, post: 'i`me fine?', likesCount: 34},
                {id: 3, post: 'Yo Yo YO?', likesCount: 5},
                {id: 3, post: 'Yo Yo YO?', likesCount: 5},
                {id: 3, post: 'Yo Yo YO?', likesCount: 5},
                {id: 3, post: 'Yo Yo YO?', likesCount: 5}
            ],
            newPostText: ''
        }
    },
    getState() {
        return this._state;
    },

    renderApplication() {
        console.log("help think")
    },

    subscribe(observer) {
        this.renderApplication = observer;
    },

    dispatch(action) {
      this._state.profilePage = profileReducer(this.getState().profilePage, action);
      this._state.messagePage = dialogsReducer(this.getState().messagePage, action);
      this.renderApplication();
    }
}

export default store;