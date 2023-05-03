import MyPostContainer from './MyPosts/MyPostContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return <div className={classes.profile_wrapper}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostContainer/>
            </div>
}


export default Profile;