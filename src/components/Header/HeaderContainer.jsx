import React from 'react';
import {connect} from "react-redux";
import {auth, changeTime} from "../../redux/header-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        //authorization
        this.props.auth();
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

export default connect(mapStateToProps, {changeTime, auth})(HeaderContainer);

