import React from 'react';
import {addMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirecte";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.header.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs)
