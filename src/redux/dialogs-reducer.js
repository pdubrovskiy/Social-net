const ADD_MESSAGE = 'social-network/dialogs/ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Pavel' },
        { id: 2, name: 'Ilya' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Dasha' },
        { id: 5, name: 'Victor' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Bye' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'LOL!' }
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.MessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                messageDraft: ''
            };
        default:
            return state;
    }
}

export const addMessage = (text) => {
    return { type: ADD_MESSAGE, MessageText: text }
}



export default dialogsReducer;