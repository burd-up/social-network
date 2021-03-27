import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

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
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersComponent);
