import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if(!props.profile) return <Preloader />

    return (
        <div>
            <div className={classes.background}>
                <img src='https://codeflarelimited.com/blog/wp-content/uploads/2021/01/react-one.jpg.webp' alt="" className={classes.background_picture}></img>
            </div>
            <div className={classes.acountInfo}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;