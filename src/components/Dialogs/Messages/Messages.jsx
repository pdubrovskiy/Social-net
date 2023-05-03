import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';
import Message from './Message/Message';
import classes from './Messages.module.css'


const Messages = (props) => {

    const messagesElements = props.messages.map(elem => <Message message={elem.message} key={elem.id} />);

    const addMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={classes.messages}>
            {messagesElements}
            <div className={classes.newMessage}>
                <ReduxNewMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    );
}

const maxLength30 = maxLengthCreator(30);
const minLength3 = minLengthCreator(3);

const newMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newMessageText" placeholder="message" validate={[required, minLength3, maxLength30]}/>
            <button>new message</button>
        </form>
    );
}

const ReduxNewMessageForm = reduxForm({ form: 'newMessage' })(newMessageForm);

export default Messages;