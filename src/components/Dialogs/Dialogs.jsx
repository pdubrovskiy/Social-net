import DialogItems from './DialogItems/DialogItems';
import classes from './Dialogs.module.css'
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return <div className={classes.dialogs}>
                <DialogItems dialogs={props.dialogs}/>
                <MessagesContainer/>
           </div>
}

export default Dialogs;