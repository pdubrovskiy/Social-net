import React from "react";
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.editMode ?
                        <div>
                            <input maxLength={300}
                                   autoFocus={true} value={this.state.status}
                                   onBlur={this.deactivateEditMode} className={classes.status_editor}
                                   onChange={this.onStatusChange}/>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.activateEditMode} className={classes.status}>{this.props.status || "No status"}</span>
                        </div>
                }
            </>
        );
    }
}

export default ProfileStatus;