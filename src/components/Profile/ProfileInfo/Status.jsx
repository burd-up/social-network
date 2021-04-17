import React from 'react';
import s from './Status.module.css';

class Status extends React.Component {
    state = {
        aditMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    activateAditMode = () => {
        this.setState({
            aditMode: true
        })
    }

    dectivateAdetMode = () => {
        this.setState({
            aditMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div >
                {!this.state.aditMode && <div onDoubleClick={this.activateAditMode}>{this.props.status || "status"}</div>}
                {this.state.aditMode && <div className={s.textForm}>
                    <input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.dectivateAdetMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default Status;
