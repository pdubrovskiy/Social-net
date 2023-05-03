import classes from './FormControls.module.css';

export const FormControls = ({input, meta, element, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            {props.children}
            <div>
                { hasError && <span>{meta.error}</span>}
            </div>
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}><textarea {...input} {...restProps}></textarea></FormControls>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}><input {...input} {...restProps}></input></FormControls>
}



