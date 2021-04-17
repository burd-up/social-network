import React from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize, getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (number) => {
        this.props.getUsers(number, this.props.pageSize)
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   onPageChange={this.onPageChange}/>
            {this.props.isFetching === true ? <Preloader/> : null}
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers: requestUsers}),
)(UsersComponent)
