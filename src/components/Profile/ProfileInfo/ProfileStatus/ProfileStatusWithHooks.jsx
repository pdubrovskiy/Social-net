import React from "react";
import { useState, useEffect } from "react";
import classes from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
         setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <>
            {!editMode &&
                <div>
                    <span className={classes.status} onDoubleClick={activateEditMode} >{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input maxLength={300} className={classes.status_editor} 
                           onBlur={deactivateMode} autoFocus={true}
                           value={status} onChange={onStatusChange}
                           />
                </div>
            }
        </>
    );
}

export default ProfileStatusWithHooks;