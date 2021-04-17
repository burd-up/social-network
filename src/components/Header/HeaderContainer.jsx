import React from 'react';
import {connect} from "react-redux";
import {changeTime, logout} from "../../redux/header-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Header {...this.props}/>
    };
}

let mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

export default connect(mapStateToProps, {changeTime, logout})(HeaderContainer);

