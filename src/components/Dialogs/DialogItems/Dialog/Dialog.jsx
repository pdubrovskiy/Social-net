import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css'

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
        <NavLink to={path} className={data => data.isActive? classes.active : classes.dialog}>{props.name}</NavLink>
    );
}

export default Dialog;