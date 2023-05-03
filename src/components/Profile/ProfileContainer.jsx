import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, getUserStatus, updateStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import withRouter from './WithRouter';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId){
            userId = this.props.autorizedUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userID,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);