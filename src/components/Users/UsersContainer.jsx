import React from 'react';
import {connect} from "react-redux";
import {
    changeCurrentPageActionCreator, changeTotalUserCountActionCreator,
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.changeTotalUserCount(response.data.totalCount);
        });
    }

    onPageChange = (number) => {
        this.props.changeCurrentPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      changeCurrentPage={this.props.changeCurrentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      onPageChange={this.onPageChange}/>
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        changeCurrentPage: (currentPage) => {
            dispatch(changeCurrentPageActionCreator(currentPage))
        },
        changeTotalUserCount: (totalUserCount) => {
            dispatch(changeTotalUserCountActionCreator(totalUserCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;