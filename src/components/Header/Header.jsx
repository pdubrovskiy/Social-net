import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h2>Universe</h2>
        <div className={classes.logo_icon}>net</div>
      </div>

      <div className={classes.login_block}>
        {
          props.isAuth ? <div> {props.login} - <button className={classes.logout_button} onClick={props.loginOutUser}>Log out</button></div> :
            <NavLink to="login" className={classes.login}>Login</NavLink>
        }
      </div>

    </header>
  );
}

export default Header;