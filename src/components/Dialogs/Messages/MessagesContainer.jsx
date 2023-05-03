import { connect } from 'react-redux';
import { addMessage } from '../../../redux/dialogs-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return ({
        messages: state.messagesPage.messages,
        messageDraft: state.messagesPage.messageDraft
    });
}


const MessagesContainer = connect(mapStateToProps, {addMessage})(Messages);

export default MessagesContainer;