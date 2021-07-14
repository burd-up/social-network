import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfileData, getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirecte";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorisedUserId;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile();
    }
    componentDidUpdate(prevProps,prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    }

    render() {
        return <Profile {...this.props}
                        status={this.props.status}
                        isOwner={!this.props.match.params.userId}
                        savePhoto={this.props.savePhoto}
                        changeProfileData={this.props.changeProfileData}
                        updateStatus={this.props.updateStatus}/>;
    }
};



let mapStateToProps = (state) => {
    return {
        autorisedUserId: state.header.userId,
        profilePage: state.profilePage,
        isAuth: state.header.isAuth,
        status: state.profilePage.status
    }
 }

export default compose(
    connect(mapStateToProps,{getProfile, getStatus, updateStatus, savePhoto, changeProfileData}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

