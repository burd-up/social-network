import React, {useEffect, useState} from 'react';
import s from './Status.module.css';

const StatusWithUseState = (props) => {

    let stateAditMode = useState(false)
    let [aditMode, setAditMode] = stateAditMode;

    let stateStatus = useState(props.status)
    let [status, setStatus] = stateStatus;

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateAditMode = () => {
        setAditMode(true)
    }

    const dectivateAdetMode = () => {
        setAditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!aditMode && <div onDoubleClick={activateAditMode}>{props.status || "status"}</div>}
            {aditMode && <div className={s.textForm}>
                <input autoFocus={true} onChange={onChangeStatus} onBlur={dectivateAdetMode}
                       value={status}/>
            </div>}
        </div>
    )

}

export default StatusWithUseState;
