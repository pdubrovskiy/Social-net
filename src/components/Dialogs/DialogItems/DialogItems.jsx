import Dialog from './Dialog/Dialog';
import classes from './DialogItems.module.css'


const DialogItems = (props) => {

    const dialogElements = props.dialogs.map(elem => <Dialog name={elem.name} id={elem.id} key={elem.id}/>);

    return (
        <div className={classes.dialogItems}>
            {dialogElements}
        </div>
    );
}

export default DialogItems;