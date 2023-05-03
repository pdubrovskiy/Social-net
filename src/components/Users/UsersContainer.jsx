import { connect } from "react-redux";
import { setCurrentPage, setUsers, toggleFollow, toggleIsFollowing, requestUsers, follow, unfollow } from "../../redux/users-reducer";
import React from 'react';
import Users from './UsersC';
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPagSize, getTotalUsersCount, getUsers } from "../../redux/user-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    toggleFollow={this.props.toggleFollow}
                    isFetching={this.props.isFetching}
                    toggleIsFollowing={this.props.toggleIsFollowing}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            }
        </>
    }

}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     };
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPagSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
}

export default compose(
    connect(mapStateToProps,
        {
            toggleFollow, setUsers, setCurrentPage, toggleIsFollowing,
            getUsers: requestUsers, follow, unfollow
        }),
    withAuthRedirect
)(UsersContainer);