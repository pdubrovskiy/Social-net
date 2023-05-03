import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, minLengthCreator, required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormControls/FormControls";
import classes from './LoginForm.module.css';


const maxLength30 = maxLengthCreator(30);
const minLength3 = minLengthCreator(3);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="login" placeholder="Login" type="text" autoComplete="current-email" validate={[required, minLength3, maxLength30]} />
            </div>
            <div>
                <Field component={Input} name="password" placeholder="Password" type="password" autoComplete="current-password" validate={[required, minLength3, maxLength30]} />
            </div>
            <div>
                <div className={classes.rememberMeWrapper}>
                    <Field component={Input} name="rememberMe" type="checkbox" id="rememberMe" className={classes.checkBox_label}/>
                    <label htmlFor="rememberMe" className={classes.checkBox_label}>Remember me</label>
                </div>
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button className={classes.button_login}>Login</button>
            </div>
        </form>
    );
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

export default ReduxLoginForm;