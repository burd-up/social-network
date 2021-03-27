import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props}/>;
    }
};

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
 }

export default connect(mapStateToProps,{getProfile})(withRouter(ProfileContainer))

