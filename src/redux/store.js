// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";

// const store = {
//     _subscriber(){
//         console.log('no subscribers (observers)');
//     },
//     _state : {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you ?', likesCount: 12},
//                 {id: 2, message: 'I love you', likesCount: 23},
//                 {id: 3, message: 'Congratulation!', likesCount: 56},
//               ],    
//             postDraft: '',
//         },
//         messagesPage: {
//             dialogs: [
//                 {id: 1, name: 'Pavel'},
//                 {id: 2, name: 'Ilya'},
//                 {id: 3, name: 'Valera'},
//                 {id: 4, name: 'Dasha'},
//                 {id: 5, name: 'Victor'}
//               ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'Bye'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'LOL!'}
//             ],
//             messageDraft: '',
//         },
//         sideBar: {
//             friends: [
//                 {id: 1, name: 'Pavel', avatar: 'https://mixmag.io/wp-content/uploads/2021/05/discord-avatar-1024x576.jpg'},
//                 {id: 2, name: 'Andrey', avatar: 'https://www.meme-arsenal.com/memes/4d29034ab4779d515bcc93f977cf4f8f.jpg'},
//                 {id: 3, name: 'Sasha', avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'},
//                 {id: 4, name: 'Victor', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjh5pXG-r5C6NI-XAFaj0ghxPnOr32H4z1XA&usqp=CAU'}
//             ],
//         },
//     },
//     getState(){
//         return this._state;
//     },
//     subscribe(observer){
//         this._subscriber = observer;
//     },
//     dispatch(action){

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
//         this._state.sideBar = sidebarReducer(this._state.sideBar, action);

//         this._subscriber(this._state);
//     },
// }




// export default store;